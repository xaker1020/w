const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ota = document.getElementById("ota");
const apiKey = "0837213505e842f3a3b0490b885afd02";
const units = "metric";

btn.addEventListener("click", async () => {
  if (input.value.trim().length < 1) {
    alert("Shaharni kiriting");
  } else {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=${units}`
    );
    const data = await res.json();
    chizish(data);
  }
});

function chizish(malumot) {
  const icon = malumot.weather[0].icon;
  const sana = new Date();
  const oy = sana.toString().split(" ")[1];
  const kun = sana.toString().split(" ")[2];

  ota.innerHTML = `
    <img src="http://openweathermap.org/img/w/${icon}.png" alt="" />
    <h1>${malumot.main.temp}°</h1>
    <h3>${malumot.name}</h3>
    <h5>Max:${malumot.main.temp_max}° Min:${malumot.main.temp_min}°</h5>
    <div class="df">
      <h4>Today:</h4>
      <h4>${oy}, ${kun}</h4>
    </div>
  `;
}





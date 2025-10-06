document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("weather-form");
  if (!form) return;
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;
    const resultsDiv = document.getElementById("weather-results");
    resultsDiv.innerHTML = "Loading rain data…";

    // NASA POWER API for precipitation
    const today = new Date().toISOString().slice(0,10);
    const apiUrl = `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=PRECTOT&community=RE&longitude=${lon}&latitude=${lat}&start=${today}&end=${today}&format=JSON`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      const precip = data.properties.parameter.PRECTOT[today];
      resultsDiv.innerHTML = precip !== undefined
        ? `Estimated precipitation for <b>${today}</b> at (<b>${lat}</b>, <b>${lon}</b>): <b>${precip} mm</b>`
        : "No precipitation data available for this location and date.";
    } catch (err) {
      resultsDiv.innerHTML = "Failed to load weather data. Check your coordinates or try again later.";
    }
  });
});

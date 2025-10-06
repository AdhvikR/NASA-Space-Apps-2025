const form = document.getElementById('parade-form');
const results = document.getElementById('results');

form.addEventListener('submit', e => {
  e.preventDefault();
  const location = document.getElementById('location').value;
  const date = document.getElementById('date').value;

  results.innerHTML = `
    <h2>Next Steps:</h2>
    <ul>
      <li>
        <b>NASA Giovanni:</b> <a href="https://giovanni.gsfc.nasa.gov/" target="_blank">Open Giovanni</a>
        <br>
        Use this web tool to visualize rainfall patterns at your parade location and date. Choose a precipitation variable, set your desired date range, and compare historical weather trends.
      </li>
      <li>
        <b>NASA Worldview:</b> <a href="https://worldview.earthdata.nasa.gov/" target="_blank">Open Worldview</a>
        <br>
        View real-time satellite maps. Search your event location and check daily rainfall/cloud cover here.
      </li>
      <li>
        <b>Event Location:</b> ${location}<br>
        <b>Event Date:</b> ${date}
      </li>
    </ul>
    <p>Tip: Use the resources below to analyze historic and current precipitation at your parade site. For more advanced scripting and access to data APIs, visit the <a href="https://disc.gsfc.nasa.gov/information/howto?page=1&dataTools=Python" target="_blank">NASA Earthdata 'How To'</a> guides.</p>
    <h3>Additional Useful Links</h3>
    <ul>
      <li><a href="https://disc.gsfc.nasa.gov/information/tools?title=OPeNDAP%20and%20GDS" target="_blank">OPeNDAP and GDS</a>: Advanced dataset download.</li>
      <li><a href="https://disc.gsfc.nasa.gov/information/tools?title=Hydrology%20Data%20Rods" target="_blank">Hydrology Data Rods</a></li>
      <li><a href="https://search.earthdata.nasa.gov/search" target="_blank">Earthdata Search</a></li>
    </ul>
    <p>
      For developers: NASA APIs and tools generally require a free account. See the <a href="https://api.nasa.gov" target="_blank">NASA API Portal</a> to explore more integrations.
    </p>
  `;
});


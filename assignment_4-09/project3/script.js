document.addEventListener("DOMContentLoaded", function () {
    const countryInformation = document.querySelector(".country-info");
  
    fetch("https://restcountries.com/v3/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const  randomInd = Math.floor(Math.random() * data.length);
        const country = data[randomInd];
  
        const html = `
          <h2>${country.name.common}</h2>
          <ul>
            <li><strong>Capital:</strong> ${country.capital}</li>
            <li><strong>Population:</strong> ${country.population.toLocaleString()}</li>
            <li><strong>Area:</strong> ${country.area.toLocaleString()} square kilometers</li>
            <li><strong>Languages:</strong> ${Object.values(country.languages).join(", ")}</li>
            <li><strong>Currency:</strong> ${Object.values(country.currencies)[0].symbol}</li>
            <img src="${country.flags[0]}" alt="${country.name.common}" width="150">
          </ul>
        `;
  
        countryInformation.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        countryInformation.innerHTML = "Failed to fetch the  country data.";
      });
  });
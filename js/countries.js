const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries()

const displayCountries = countries => {

    // for (const country of countries) {
    //     console.log(country.name)
    // }
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3> ${country.name} </h3>
        <p> ${country.capital} </p>
        <button onclick="loadCountryByName('${country.name}')" >Details</button>
        
        `

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // console.log(country.name)
        // div.appendChild(h3);

        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
    // console.log(url);
}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h5> Name: ${country.name} </h5>
    <p> Population: ${country.population} </p >
    <img width = "300px" src = "${country.flag}">
        `
    console.log(country)
}
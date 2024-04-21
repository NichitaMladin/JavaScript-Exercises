let displayCityAndCountry = () => {
    let city = prompt("Please add the city: ");
    let country = prompt("Please add the country: ");
    let display = city + " " + country;
    alert(display);
}

document.getElementById("displayCountryCityAlert").addEventListener("click", displayCityAndCountry);


let displayCityCountryParagraph = () => {
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let display = city + " " + country;

    let mypResult = document.getElementById("myp");
    mypResult.textContent = display;
}
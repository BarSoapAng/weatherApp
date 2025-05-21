//const { googleKey, weatherKey } = require('./keys.json');


// Define the API URL
// const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=Waterloo`;
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=236455085933479e90f145839252005&q=Waterloo`;

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const imgLink = data.current.condition.icon;
    const curTemp = data.current.temp_c;
    const feelsLike = data.current.feelslike_c;

    let conditionImg = document.getElementById("conditionImg");
    conditionImg.src = imgLink;
    let tempHeader = document.getElementById("curTemp");
    tempHeader.innerHTML = curTemp + "°C";
    let tempFeel = document.getElementById("feelsLike");
    tempFeel.innerHTML = "feels like " + feelsLike + "°C";
  })
  .catch(error => {
    console.error('Error:', error);
});


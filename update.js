// Define the API URL
const apiUrl = 'http://api.weatherapi.com/v1';
let location;

function showCity(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Make a request to a Geocoding API (e.g. Google Maps Geocoding API)
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDhjbp3IRIPOh8m-U73R1cVsy0iKcDSpco`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Parse the city name from the API response
      const city = data.results[0].address_components.find((component) =>
        component.types.includes("locality")
      ).long_name;

      console.log(`Your city is ${city}.`);
      location = city;
    })
    .catch((error) => console.log(error));
}

navigator.geolocation.getCurrentPosition(showCity);
console.log(location);

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
});
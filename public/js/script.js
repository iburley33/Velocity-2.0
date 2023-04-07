let weather = {
  apiKey: "debedf3ec770a6134bafe0d07ed54e45",
  fetchWeather: function (city) {
    // Show the loading state
    document.querySelector(".weather").classList.add("loading");

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data, city))
      .catch((error) => {
        // Hide the loading state
        document.querySelector(".weather").classList.remove("loading");
        // Show an error message to the user
        alert("No weather found.");
        console.error(error);
      });
  },
  displayWeather: function (data, city) {
    // Hide the loading state
    document.querySelector(".weather").classList.remove("loading");

    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(
      ".description"
    ).innerText = `Weather conditions: ${description}`;
    document.querySelector(".temp").innerText = `Temperature: ${temp} °C`;
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    // add new code
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    map.setView([lat, lon], 13);
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".searchButton").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });

var map = L.map("map").setView([38.5449, -121.7405], 14);

L.tileLayer(
  "https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=ce6aa4d18f9e44b5a6a0bf8a5cba5636",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
).addTo(map);

let marker,
  circle,
  zoomed = false;

var searchBar = document.querySelector(".search-bar");

function setLocation() {
  var storage = localStorage.getItem("city");
  if (storage) {
    searchBar.value = storage;
    weather.search();
  }
}

setLocation();

function saveLocation() {
  var text = searchBar.value;
  localStorage.setItem("city", text);
};

const logoutHandler = async () => {
  fetch("/api/users/logout", {
    method: "POST",
  }).then(res => {
    if (res.status==204) {
      document.location.replace("/login")
    }
  });
};

/* document.querySelector(".saveButton").addEventListener("click", saveLocation);
 */
document.querySelector("#logout-button").addEventListener("click", logoutHandler);

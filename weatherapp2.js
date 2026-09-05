
const APIkey = "40087eec131d8103555ae0752028c97a";

async function getweather() {
    let selectCity = document.getElementById("SelectCity");
    
    
    let cityName = selectCity.value; 

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey + "&units=metric";
   
const url2 = "https://api.openweathermap.org/data/2.5/forecast?q="
    + cityName
    + "&appid="
    + APIkey
    + "&units=metric";
    const response = await fetch(url);
    const data = await response.json();

    let city = document.getElementById("city");
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let humidity = document.getElementById("humidity");
    let rain = document.getElementById("rain");
    let pressure = document.getElementById("pressure");
    let wind = document.getElementById("wind");
    let mainweather = document.getElementById("mainweather");

    city.innerText = data.name;
    temperature.innerText = data.main.temp + "°C";
    description.innerText = data.weather[0].description;
    humidity.innerText = data.main.humidity + "%";
    pressure.innerText = data.main.pressure + " hPa";
    wind.innerText = data.wind.speed + " km/h";
    mainweather.innerText = data.weather[0].main;
    console.log(data);

    const response2=await fetch(url2);
    const data2=await response2.json();
    console.log(data2);
    console.log(data2.list[0]);
    console.log(data2.list[0].dt_txt);
    console.log(data2.list[0].weather[0].main);

    let forecast=document.getElementById("forecast");
    forecast.innerHTML="";
    for(let i=0;i<7;i++)
    {
        forecast.innerHTML+=`<div class="hour-card">
         <p class="time">
                ${data2.list[i].dt_txt}
            </p>

            <h2>
                ${data2.list[i].main.temp}°C
            </h2>

            <p>
                ${data2.list[i].weather[0].main}
            </p>

        </div>`;
        
        
    
    }

    let day=document.getElementById("day");
    let today=new Date();
    day.innerText=today;
   
}

let selectCity = document.getElementById("SelectCity");
selectCity.addEventListener("change", getweather);


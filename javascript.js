const apiKey="14b94cda966242ecf106f2b310a377c5";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const searchW= document.querySelector("#clear");
    async function chechWeather(city) {
        const response= await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
          document.querySelector(".Error").style.display="block";
          document.querySelector(".weather").style.display="none";

        }else {var data= await response.json();
        console.log(data);

        document.querySelector("#city").innerHTML=data.name;
        document.querySelector("#temperature").innerHTML=data.main.temp + "°C";
        document.querySelector("#Humidity").innerHTML=data.main.humidity + "%";
        document.querySelector("#Wind").innerHTML=data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
          searchW.src="images/clouds.png"
        }else if(data.weather[0].main == "Clear"){
          searchW.src="images/clear.png"
        }else if(data.weather[0].main == "Rain"){
          searchW.src="images/rain.png"
        }else if(data.weather[0].main == "Drizzle"){
          searchW.src="images/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
          searchW.src="images/mist.png"
        }
           
       document.querySelector(".weather").style.display="block"; 
       document.querySelector(".Error").style.display="none";
        }

        
    }
    searchBtn.addEventListener("click" , ()=>{
        chechWeather(searchBox.value);
    })
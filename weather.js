const apikey="214b513c701104c5c559d2b49681298e";
const api="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const photoi=document.querySelector(".photo");
async function weather(city){
    const response =await fetch(api+city+`&appid=${apikey}`);
    let data=await response.json();
    console.log(data);
    document .querySelector(".temp").innerText=data.main.temp;
    document .querySelector(".country").innerText=data.name;
    document .querySelector(".humidity").innerText=data.main.humidity;
    document .querySelector(".wind").innerText=data.wind.speed;
    if(data.weather[0].main == "Mist"){
        photoi.src="mist.png";
    }
    if(data.weather[0].main == "Drizzle"){
        photoi.src="drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
        photoi.src="snow.png";
    }
    else if(data.weather[0].main=="Clouds"){
        photoi.src="clouds.png";
    }
   else if(data.weather[0].main == "Clear"){
        photoi.src="clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        photoi.src="rain.png";
    }
    document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener("click",()=>{
    weather(searchbox.value);
})

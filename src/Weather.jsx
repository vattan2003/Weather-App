import axios from "axios"
import { useState } from "react"
import "./Weather.css"

function Weather(){

    
const [city,setcity]=useState("")

const [weather,setweather]=useState("")
const [temp,settemp]=useState("")
const [Description,setDescription]=useState("")

function handleCity(evt){
    setcity(evt.target.value)
    
}

function getWeather(){
    var weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e00d412b9ed0a43ee18a724461eb657f`)
    weatherdata.then(function(success){
        console.log(success)
        setweather(success.data.weather[0].main)
        settemp(success.data.main.temp)
        setDescription(success.data.weather[0].description)
    })
}
    return(
        <div id="app-div" className=" p-2">
            <center>
<div className=" p-5 rounded-lg">
    <h1 style={{fontFamily:"fantasy"}}>Weather Report <i class="fa-solid fa-bolt"></i></h1>
    <p id="para">I can give you a wether report about a city !</p>
<input onChange={handleCity} placeholder="Enter a City" className="mt-2 border border-black rounded-md p-1 outline-none"></input>
<button id="btn" onClick={getWeather} className="bg-black text-white p-1 rounded-md mt-2 text-[12px]"><b>Get Weather</b></button>
<div>
    <h1 class="result">Weather <i class="fa-solid fa-moon"></i>:{weather}</h1>
    <h1 class="result">Temp <i class="fa-solid fa-temperature-low"></i>: {temp}</h1>
    <h1  class="result">Description <i class="fa-solid fa-cloud"></i>: {Description}</h1>
<div className="text-[10px] mt-60">©DevelopByVattanWebDev.Inc</div>
</div>
</div>
</center>

        </div>
    )
}
export default Weather
const button = document.getElementById("search-button")
const city = document.getElementById("city")

const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")
const icon = document.getElementById("icon")
async function getData(cityName)
{
    const Promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d8a3e1c5985d4a99b3124938251003&q=${cityName}&aqi=yes`)
    return await Promise.json()
}

button.addEventListener('click',async ()=>{
        const value =  city.value;
        const result = await getData(value);
        cityName.innerText = `${result.location.name} ${result.location.region}-${result.location.country}`  
        cityTime.innerText = result.location.localtime
        cityTemp.innerText = result.current.temp_f
        const link =  result.current.condition.icon
        const img = document.createElement('img');
        img.src = link
        icon.appendChild(img) 
})
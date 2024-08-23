const API_KEY='41a6214a4f1b4e05b7e135221241608'
const city=document.querySelector('.city')
const img=document.querySelector('.img')
const temp=document.querySelector('.temp')
const cond=document.querySelector('.cond')
const feels=document.querySelector('.feels')
const humidity=document.querySelector('.humidity')
const country=document.querySelector('.country')
const currently=document.querySelector('.currently')
const sunrise=document.querySelector('.sunrise')
const sunset=document.querySelector('.sunset')
const search=document.querySelector('.search')
const input=document.querySelector('.input')
const weather=document.querySelector('.weather')
const error=document.querySelector('.error')
const cont=document.querySelector('.cont')

let data=''
const getWeather = async (city_name) => {
	const res=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city_name}`)
    data=await res.json()
    console.log(data)
    if(!res.ok){
        error.innerHTML=data.error.message
        weather.style.display='none'
        error.style.display='flex'
        cont.style.display='none'
    }
    else{
         weather.style.display='flex'
        error.style.display='none'
        cont.style.display='flex'
    }


    city.innerHTML=data.location.name
    if(data.current.is_day)
        currently.innerHTML=`<span> Currently : </span> Day `
    else currently.innerHTML=`<span> Currently : </span> Night`
    country.innerHTML=`${data.location.region},${data.location.country}`
    img.src=data.current.condition.icon;
    temp.innerHTML=`${data.current.temp_c}<span><sup>&#176;C</sup></span>`
    cond.innerHTML=`<span> Condition : </span>${data.current.condition.text}`
    feels.innerHTML=`<span> Feels Like : </span>${data.current.feelslike_c}<span>&#176;C</span>`
    humidity.innerHTML=`<span> Humidity : </span>${data.current.humidity}`
    sunrise.innerHTML=`<span> Sunrise : </span>${data.forecast.forecastday[0].astro.sunrise
    }`
    sunset.innerHTML=`<span> Sunrise : </span>${data.forecast.forecastday[0].astro.sunset
    }`

}
window.addEventListener('load',()=>{
    getWeather("jharkhand");
})
search.addEventListener('click',()=>{
    const city_name = input.value.trim();
    if (city_name) {
        getWeather(city_name);
    }
})

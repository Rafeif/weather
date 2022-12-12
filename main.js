let form=document.querySelector("form")
let cityName=document.getElementById('city-name')
let afterSubmit=document.getElementById('afterSubmit')
let loading=document.getElementById('loading')
let data=document.getElementById('data')
let clrd=document.getElementById('clrd')
let clrn=document.getElementById('clrn')
let cldsd=document.getElementById('cldsd')
let cldsnf=document.getElementById('cldsnf')
let brkd=document.getElementById('brkd')
let brkn=document.getElementById('brkn')
let strd=document.getElementById('strd')
let strn=document.getElementById('strn')
let rd=document.getElementById('rd')
let rn=document.getElementById('rn')
let hrd=document.getElementById('hrd')
let hrn=document.getElementById('hrn')
let storm=document.getElementById('storm')
let snowd=document.getElementById('snowd')
let snown=document.getElementById('snown')
let mistd=document.getElementById('mistd')
let mistn=document.getElementById('mistn')
function resetOpacity(){
    clrd.style.opacity=0;
    clrn.style.opacity=0;
    cldsd.style.opacity=0;
    cldsnf.style.opacity=0;
    brkd.style.opacity=0;
    brkn.style.opacity=0;
    strd.style.opacity=0;
    strn.style.opacity=0;
    rd.style.opacity=0;
    rn.style.opacity=0;
    hrd.style.opacity=0;
    storm.style.opacity=0;
    snowd.style.opacity=0;
    snown.style.opacity=0;
    mistd.style.opacity=0;
    mistn.style.opacity=0;

}
const apiKey='d553729621850d84fb523aad92bdc72b';
form.addEventListener('submit',(e)=>{
    loading.style.display='none'
    e.preventDefault();

const fetchWeather= async function(){
const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&APPID=${apiKey}`)
const responseJson= await response.json();
return responseJson; 
}
const weatherData=fetchWeather();
weatherData.then((data)=>{
afterSubmit.innerHTML=`
<div class="city">
<h2>${data.name},${data.sys.country}</h2>
<h3>${data.weather[0].main}</h3>
</div>
<div class="temp-info">
<div class="temp-pic">
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div class="temp">
<h2>${(data.main.temp-273.15).toFixed(2)}°F</h2>
</div>
<div class="minMax">
<div class="min">
<p>MIN: ${(data.main.temp_min-273.15).toFixed(2)}°F</p>
</div>
<div class="max">
<p>MAX:${(data.main.temp_max-273.15).toFixed(2)}°F</p>
</div>
</div>
</div>
</div> 
`

switch (data.weather[0].icon) {
case '01d':
    resetOpacity()
    clrd.style.opacity=1
        break;
case '01n':
    resetOpacity()
    clrn.style.opacity=1;
    break;
case '02d':
resetOpacity()
brkd.style.opacity=1;
break;
case '02n':
resetOpacity()
brkn.style.opacity=1 ;
break;
case '04d':
resetOpacity()
cldsd.style.opacity=1;
break;
case '04n':
resetOpacity()
cldsnf.style.opacity=1;
break;
case '03d':
resetOpacity()
strd.style.opacity=1;
break;
case '03n':
resetOpacity()
strn.style.opacity=1;
break;
case '10d':
resetOpacity()
rd.style.opacity=1;
break;
case '10n':
resetOpacity()
rn.style.opacity=1;
break;
case '09d':
resetOpacity()
hrd.style.opacity=1;
break;
case '09n':
resetOpacity()
hrn.style.opacity=1;
break;
case '11d':
resetOpacity()
storm.style.opacity=1;
break;
case '11n':
resetOpacity()
storm.style.opacity=1;
break;
case '13d':
resetOpacity()
snowd.style.opacity=1;
break;
case '13d':
resetOpacity()
snown.style.opacity=1;
break;
case '50d':
resetOpacity()
mistd.style.opacity=1;
break;
case '50d':
resetOpacity()
mistn.style.opacity=1;
break;
default:
resetOpacity()
mistn.style.opacity=1;
break;
}
loading.style.display='none'
})
loading.style.display='block'
})
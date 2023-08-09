const c=document.querySelector('h2'),d=document.querySelectorAll('h3'),
  w=document.querySelectorAll('p');
function W(i){fetch(`https://api.weatherapi.com/v1/forecast.json?key=c023aef25a10409185674936230808&q=${i}&days=3&aqi=no&alerts=no`)
  .then(r=>r.json()).then(function(j){c.innerHTML=j.location.name;
  const D=new Date(j.location.localtime);
  d[0].innerHTML=`${D.toLocaleString('default',{weekday:'long'})}<span>
  ${D.toLocaleString('default',{month:'long',day:'numeric'})}</span>`;
  w[0].innerHTML=`<span><b>${j.current.temp_c}°C</b>
  <img src=${j.current.condition.icon} alt=${j.current.condition.text}></span>
  ${j.current.condition.text}<span><span><img src='icon-umberella.png' alt='rain'>
  ${j.current.precip_mm*100}%</span><span><img src='icon-wind.png' alt='wind'>
  ${j.current.wind_kph}km/h</span><span><img src='icon-compass.png' alt='direction'>
  ${j.current.wind_dir}</span></span>`;
  for(let i=1;i<3;i++){d[i].innerHTML=new Date(j.forecast.forecastday[i].date)
  .toLocaleString('default',{'weekday':'long'});
  w[i].innerHTML=`<img src="${j.forecast.forecastday[i].day.condition.icon}"
  alt="${j.forecast.forecastday[i].day.condition.text}"><span><span class="x">
  ${j.forecast.forecastday[i].day.maxtemp_c}°C</span><span>
  ${j.forecast.forecastday[i].day.mintemp_c}°C</span></span>
  ${j.forecast.forecastday[i].day.condition.text}`;}});}
if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(p)
  {W(`${p.coords.latitude},${p.coords.longitude}`);},function(){W('cairo');})}
else W('cairo');
document.querySelector('main input').addEventListener('input',function(){W(this.value);});
alert("Search Loction For Results")
const WUrl = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '8b42a8ebecmshd92ea792750835dp154ee1jsn776e70128405',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

Btn = document.getElementById("goBtn");
city = document.getElementById("searchBar");

const cityName = () => {
    console.log(city.value);
    return city.value
}


Btn.addEventListener("click", () => {
    document.getElementById("nameCity").innerHTML = cityName();
    async function fetchWeather(name) {
        try {
            const response = await fetch(WUrl+name, options);
            const result = await response.json();
            console.log(result);
    
    
            cloud.innerHTML = result.current.cloud
            dewpoint_c.innerHTML = result.current.dewpoint_c
            feelslike_c.innerHTML = result.current.feelslike_c
            heatindex_c.innerHTML = result.current.heatindex_c
            humidity.innerHTML = result.current.humidity
            last_updated.innerHTML = result.current.last_updated
            temp_c.innerHTML = result.current.temp_c
            lat.innerHTML = result.location.lat
            localtime.innerHTML   = result.location.localtime
            lon.innerHTML = result.location.lon
            region.innerHTML  = result.location.region
            icon.innerHTML = `<img src="http:${result.current.condition.icon}">`
            text.innerHTML = result.current.condition.text

        } catch (error) {
            console.error(error);
        }
    }
    fetchWeather(cityName())
})













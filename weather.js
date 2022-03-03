function init(){
    const apikey = 'c21c3c5f65d040b6ae871907220303';
    const form = document.getElementById('form');
    const search = document.getElementById('search');
    const main = document.getElementById('main');
    const temp = document.getElementById('temp');
    const place = document.getElementById('place');
    const title = document.getElementById('title');
    const feel = document.getElementById('feel');

    const url = (loc) => `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${loc}&aqi=no`;
    const getWeatherByLocation = async (loc) =>{
        try{
            const resp = await fetch(url(loc));
            const data = await resp.json();
            console.log(data);
            addWeathertoPage(data);
        }
        catch(err){
            title.innerHTML = "No Matching Results Found";
            place.innerHTML = "";
            feel.innerHTML = "";
            temp.innerHTML = "";
            
        }   
    }

    const addWeathertoPage = (data) => {

        title.innerHTML = "";
        temp.innerHTML = `${data.current.temp_c}°C - ${data.current.temp_f}F`;
        console.log(temp);
        place.innerHTML = `${data.location.name}, ${data.location.country}`;
        feel.innerHTML = `(${data.current.condition.text})`;
    }

    form.addEventListener("submit" , (e) =>{
        e.preventDefault();
        if(search.value){
            getWeatherByLocation(search.value);
        }
    })
}
window.onload = init;

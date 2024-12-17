 async function checkWeather(){

   // let api_key= "d9c3b93b84a92d09bab40f0c9c24b6c6"
    let api_url='http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d9c3b93b84a92d09bab40f0c9c24b6c6';

    let response = await fetch(api_url);

    let data = await response.json();
    console.log(data);

    
}

checkWeather();
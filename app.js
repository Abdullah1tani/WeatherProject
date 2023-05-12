const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const weatherApiAcessToken = '49573f8789c590770a8c4f38376ab5b0';

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    //geocode api used to find coordinates (latitude and longitude) of the user's input location
    const LocationAPI = `https://geocode.maps.co/search?street=${req.body.street}&city=${req.body.city}&state=${req.body.state}&postalcode=${req.body.postalCode}&country=${req.body.country}`;

    async function getWeatherInfo()
    {
        try{
            //using geocode api, we get the lattitude and longitude of the location entered by the user 
            const locationAPIReq = await axios.get(LocationAPI);
            const lat = locationAPIReq.data[0].lat;
            const lon = locationAPIReq.data[0].lon;
            
            //using open weather map api, we get the weather information of the location entered by the user
            const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiAcessToken}&units=metric`;
            const weatherAPIReq = await axios.get(weatherAPI);

            //the data that we want it to show up on the user's result page
            const main = weatherAPIReq.data.main;
            const weather = weatherAPIReq.data.weather[0];
            const name = weatherAPIReq.data.name;
            const wind_speed = weatherAPIReq.data.wind.speed;
            const coord = weatherAPIReq.data.coord;
            
            //sending the data that we need to the user's page
            res.render('result', {
                main: main, 
                weather: weather, 
                name: name,
                wind_speed: wind_speed,
                coordinates: coord
            });
        }catch(err){
            res.render('error',{error: err});
        }
    }
    getWeatherInfo();
});

app.listen(3000);
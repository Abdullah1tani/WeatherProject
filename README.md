# Weather Tracker 🌦️

The Weather Tracker program is designed to provide accurate and up-to-date weather information.

With its seamless integration of real-time data from trusted weather sources, the application offers a reliable and precise weather-tracking experience.
<br>

**You can test the app yourself by clicking on this [link](https://weather-tracker-m4r9.onrender.com/)!**

## Summary

1 - [Introduction](#1-introduction)

- What Is Weather Tracker?
- [Goals](#goals)

2 - [Tools](#2-tools)

- [Geocode API](#geocode-api)
- [Weather API](#weather-api)

3 - [Development](#3-development)

- [Samples](#samples)

4 - [Installation Guide](#4-installation-guide)

5 - [Program Structure](#5-program-structure)

- [Front-end](#front-end)
  - [Main Page](#1-main-page-indexhtml)
  - [Result Page](#2-result-page-resultejs)
  - [Error Page](#3-error-page-errorejs)
- [Back-end](#back-end)

6 - [Conclusion](#6-conclusion)

- Challenges encountered
  - [Front-end](#1---front-end)
  - [Back-end](#2---back-end)
  - [Other](#3---other)

7 - [Other Projects](#7-other-projects)

 <br>

## 1. Introduction

Weather Tracker shows the live weather information about a specific location chosen by the user.
It accesses real-time weather data directly from reputable sources, ensuring accurate and timely information.
<br>

### Goals:

---

The goals of creating this program are:

- Familiarize with node.js and express.js
- Gain knowledge in using APIs
- Understand HTTP post and get requests
- Improve writing skills in Markdown syntax
  <br>

## 2. Tools:

This program uses the current APIs, libraries, and frameworks:

- [Bootstrap](https://getbootstrap.com/)
- [Geocode API](#geocode-api)
- [OpenWeather API](#weather-api)
- [Axios](https://axios-http.com/)
- [Path](https://nodejs.org/api/path.html)
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
  <br>

### Geocode API

---

[LocationIQ](https://locationiq.com/) API is a Geocode API that is used to retrieve the coordinates (longitude and latitude) of the location entered by the user.
<br>

### Weather API

---

[OpenWeather](https://openweathermap.org/api) API is used to retrieve weather data from specific coordinates (longitude and latitude).

**We are only interested in displaying the current data:**

- Name of location
- Weather description
- Coordinates (longitude and latitude)
- Temperature
- Feels like temperature
- Lowest temperature
- Highest temperature
- Pressure
- Humidity
- Wind speed
  <br>

## 3. Development

The program retrieves coordinates (longitude and latitude) of the location entered by the user using the [Geocode API](#geocode-api), then it uses the coordinates and the [weather API](#weather-api) in order to find the live weather information about the location.

### Samples:

---

**samples used to test the program:**
\# | Street | City | State | Postal Code | Country |
:---:|:---: |:---: |:---: |:---: |:---: |
1 | 555 5th Ave | New York | NY | 10017 | US |
2 | statue of liberty | - | - | - | - |
3 | Avenue Anatole France | Paris | Ile-de-France| 75007 | France |
4 | eiffel tower | - | - | - | - |
5 | Piazza del Duomo | Pisa | provincia di Pisa | 56126 | Italy |
6 | Leaning Tower of Pisa | - | - | - | - |
7 | 5200 Robinson St | Niagara Falls | Ontario | L2G 2A2 | Canada |
8 | Niagara Falls | - | - | - | - |
9 | Bridge St | London | - | SW1A 2PW | United Kingdom |
10 | - | London | - | - | - |
<br>

## 4. Installation Guide

To run Weather Tracker on your system, the following steps must be done in order:

1. Install [Node.js](https://nodejs.org/en)
2. Clone the repository using this link: https://github.com/Abdullah1tani/WeatherProject.git
3. Run `npm install` to install all the required node modules
4. Run `node app.js` in terminal to start the application
5. Go to [localhost at port 3000](http://localhost:3000/) in your web browser

## 5. Program Structure

The program is composed of 2 structures:

- [Front-end](#front-end)
- [Back-end](#back-end)
  <br>

### Front-end:

---

Front-end was built using [Login Modal template](https://mdbootstrap.com/docs/standard/extended/login/), HTML and CSS, it is composed of 3 pages:

#### **1. Main Page:** `index.html`

The first page that the user sees when he starts the program. This will be the page where he will enter the information about the desired location that he wishes to receive information about its weather.
<br>

<img width="492" alt="main page" src="./media/main-page.png">

#### **2. Result Page:** `result.ejs`

After the user clicks "Search" on the [main page](#1-main-page), the information about the weather for the specified location by the user will show up.
<br>

<img width="636" alt="result page" src="./media/result-page.png">

#### **3. Error Page:** `error.ejs`

If the location that the user entered in the [main page](#1-main-page) does not exist, this page will show up instead of [result page](#2-result-page) with the current error `TypeError: Cannot read properties of undefined (reading 'lat')`.
<br>

<img width="627" alt="error page" src="./media/error-page.png">
<br>

### Back-end:

---

Back-end was built with the following tools:

- [Axios](https://axios-http.com/)
- [Path](https://nodejs.org/api/path.html)
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)

## 6. Conclusion:

Building the Weather Tracker was an enjoyable and challenging experience.
The challenges that I encountered are as follows:

#### 1 - Front-end

- Displaying the information on the user's end
- Changing the CSS of the elements in the [Login Modal template](https://mdbootstrap.com/docs/standard/extended/login/)

#### 2 - Back-end

- Finding the right API for the [Geocode API](#geocode-api)
- Posting requests to the [Geocode API](#geocode-api)

#### 3 - Other

- Writing a well-structured documentation

## 7. Other Projects:

If you made it till here, thank you for reading

Check out my other projects:

- [Cat animation](https://github.com/Abdullah1tani/cat-animation)
- [Card animation](https://github.com/Abdullah1tani/card-animation)
- [School Donations](https://github.com/Abdullah1tani/School-donations)

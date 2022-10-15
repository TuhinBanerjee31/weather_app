import { DateTime } from "luxon";

const API_KEY = "0a907512559fb8a098cb4c5468fefd27";
const BASE_URL = "https://api.openweathermap.org/data/2.5"

//API Calling Function
const rawData = (infoType, searchRequisites) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchRequisites, appid: API_KEY});

    return fetch(url)
    .then((res) => res.json());
};

//Formating data from API
const filteringCurrentData = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, main, icon, speed};
}


//Function handling filtering data functions
const filteredData = async(searchRequisites) => {
    const currentFilteredData = await rawData('weather', searchRequisites)
    .then(filteringCurrentData);

    return currentFilteredData;
}

//Formatting Local Time Zone from Luxon
const localTimeData = (secs, zone, format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const controlIcon = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default filteredData;

export {localTimeData, controlIcon};
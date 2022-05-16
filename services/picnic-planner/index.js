import * as metaweatherApi from './../metaweather/index.js';
import * as dateUtils from './../utils/dates/index.js';
import { isTheWeatherBad, isTheWeatherClear, isTheWeatherGood } from './helpers.js';

export async function planPinic(location, asOfDate) {
    const getLocationResponse = await metaweatherApi.getLocation(location);

    if (getLocationResponse.length === 0) {
        console.log("No details was  found for the provided city.");
        return;
    }
    if (getLocationResponse.length > 1) {
        console.log(`The following locations matched your search: [${getLocationResponse.map(({title}) => title).join(", ")}]. Could you be more specific?`);
        return;
    }

    const { woeid } = getLocationResponse[0];
    const { saturday, sunday } = dateUtils.getNextWeekendDates(asOfDate);

    const latestSaturdayWeatherForcast = (await metaweatherApi.getForcastByLocationAndDate(woeid, dateUtils.formatDateToYYYYMMDD(saturday)))[0];
    const latestSundayWeatherForcast = (await metaweatherApi.getForcastByLocationAndDate(woeid, dateUtils.formatDateToYYYYMMDD(sunday)))[0];

    if (isTheWeatherBad(latestSaturdayWeatherForcast) && isTheWeatherBad(latestSundayWeatherForcast)) {
        console.log("The weather isn't looking very good this weekend, maybe stay indoors.");
        return;
    }

    if (isTheWeatherBad(latestSaturdayWeatherForcast) && isTheWeatherGood(latestSundayWeatherForcast)) {
        console.log("You should have your picnic on Sunday.");
        return;
    }

    if (isTheWeatherGood(latestSaturdayWeatherForcast) && isTheWeatherBad(latestSundayWeatherForcast)) {
        console.log("You should have your picnic on Saturday.");
        return;
    }

    if (isTheWeatherClear(latestSaturdayWeatherForcast) && !isTheWeatherClear(latestSaturdayWeatherForcast)) {
        console.log("You should have your picnic on Saturday.");
        return;
    }

    if (!isTheWeatherClear(latestSaturdayWeatherForcast) && isTheWeatherClear(latestSaturdayWeatherForcast)) {
        console.log("You should have your picnic on Sunday.");
        return;
    }
}
import * as restApiClient from '../utils/rest-api-client/index.js';
import META_WEATHER_CONFIGS from './configs/index.js';

export async function getLocation(location) {
    try {
        return await restApiClient.get(`${META_WEATHER_CONFIGS.baseUrl}/location/search/?query=${location}`);
    } catch (e) {
        throw new Error(`System could not your request. An error occured while getting the location. Reason: < ${e.message} >`);
    }
}

export async function getForcastByLocationAndDate(locationWoeid, date) {
    try {
        return await restApiClient.get(`${META_WEATHER_CONFIGS.baseUrl}/location/${locationWoeid}/${date}`);
    } catch (e) {
        throw new Error(`System could not your request. An error occured while getting the location's forcast. Reason: < ${e.message} >`);
    }
}
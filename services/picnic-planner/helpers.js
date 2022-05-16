export function isTheWeatherRainy(weather) {
    return ['hr', 'lr', 's'].includes(weather.weather_state_abbr);
}

export function isTheWeatherTooCold(weather) {
    return ['sn', 'sl'].includes(weather.weather_state_abbr) || weather.the_temp < 10;
}

export function isItHailing(weather) {
    return ['h'].includes(weather.weather_state_abbr);
}

export function isThereThunderstorm(weather) {
    return ['t'].includes(weather.weather_state_abbr);
}

export function isTheWeatherTooCloudy(weather) {
    return ['hc'].includes(weather.weather_state_abbr);
}

export function isTheWeatherClear(weather) {
    return ['c'].includes(weather.weather_state_abbr);
}

export function isTheWeatherBad(weather) {
    return isTheWeatherRainy(weather) || isTheWeatherTooCold(weather) || isItHailing(weather) || isThereThunderstorm(weather) || isTheWeatherTooCloudy(weather);
}

export function isTheWeatherGood(weather) {
    return !isTheWeatherBad(weather);
}
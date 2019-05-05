export const LOAD_WEATHER_DATA = 'LOAD_WEATHER_DATA';
export const LOADING_SUCCES = 'LOADING_SUCCES';
export const TOWN_SELECT = 'TOWN_SELECT';

export function loadWeatherData() {
    return {
        type: LOAD_WEATHER_DATA
    };
}

export function townSelect(id) {
    return {
        type: TOWN_SELECT,
        id
    };
}
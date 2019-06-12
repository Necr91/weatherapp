export const LOADING_SUCCES = 'LOADING_SUCCES';
// export const TOWN_SELECT = 'TOWN_SELECT';
export const SET_ROOT = 'SET_ROOT';

// export function townSelect(id) {
//     return {
//         type: TOWN_SELECT,
//         id
//     }
// };

export function setRoot(root) {
    return {
        type: SET_ROOT,
        root
    }
}

export const loadWeatherData = (id) => {
    return async (dispatch) => {
        return await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&lang=ru&APPID=3ced723032f3df309a5bcd00fdd43279`)
        .then(response => response.json())
        .then(data =>  dispatch({type: 'LOADING_SUCCES', data}))
    }
}
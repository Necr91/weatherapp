import { call, put, takeEvery } from 'redux-saga/effects';

export function* fetchWeatherData(action) {    
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?id=${action.id}&units=metric&lang=ru&APPID=3ced723032f3df309a5bcd00fdd43279`;
    const response = yield call(fetch, endpoint);
    const data = yield response.json();    
    yield put({ type: 'LOADING_SUCCES', data, loading: false });
}

export default function* loading() {
    yield takeEvery('TOWN_SELECT', fetchWeatherData);
}
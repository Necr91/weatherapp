import { call, put, take, takeEvery } from 'redux-saga/effects';
import { LOADING_SUCCES, LOAD_WEATHER_DATA} from '../actions/index';

export function* fetchWeatherData() {
    const select = yield take('TOWN_SELECT');         
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?id=${select.id}&units=metric&lang=ru&APPID=3ced723032f3df309a5bcd00fdd43279`;
    const response = yield call(fetch, endpoint);
    const data = yield response.json();    
    yield put({ type: LOADING_SUCCES, data, loading: false });
}

export default function* loading() {
    yield takeEvery(LOAD_WEATHER_DATA, fetchWeatherData);
}
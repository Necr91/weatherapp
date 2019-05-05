import { LOADING_SUCCES, LOAD_WEATHER_DATA } from '../actions/index';

const initialState = {
    data: {},
    loading: false
};

export default function weatherApp(state = initialState, actions) {
    switch (actions.type) {
        case LOAD_WEATHER_DATA:
            return {
                loading: true
            }
        case LOADING_SUCCES:
            return {
                ...state,
                data: actions.data,
                loading: actions.loading
            };
        default:
            return state;
    }
}
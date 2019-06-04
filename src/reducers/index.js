import { LOADING_SUCCES, LOAD_WEATHER_DATA, TOWN_SELECT } from '../actions/index';

const initialState = {
    data: {},
    loading: false,
    id: ''
};

export default function weatherApp(state = initialState, actions) {
    switch (actions.type) {
        case LOAD_WEATHER_DATA:
            return {
                ...state,
                loading: true,
                id: actions.id
            }
        case LOADING_SUCCES:
            return {
                ...state,
                data: actions.data,
                loading: actions.loading
            };
        case TOWN_SELECT:
            return {
                ...state,
                id: actions.id
            };
        default:
            return state;
    }
}
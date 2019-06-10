import { LOADING_SUCCES, TOWN_SELECT } from '../actions/index';

const initialState = {
    data: {},
    loading: true,
    id: ''
};

export default function weatherApp(state = initialState, actions) {
    switch (actions.type) {
        
        case LOADING_SUCCES:
            return {                
                data: actions.data,
                loading: false
            };
        case TOWN_SELECT:
            return {
                loading: true,
                id: actions.id
            };
        default:
            return state;
    }
}
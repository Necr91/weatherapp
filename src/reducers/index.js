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
                ...state,
                data: actions.data,
                loading: actions.loading
            };
        case TOWN_SELECT:
            return {
                
                ...state,
                loading: actions.loading,
                id: actions.id
            };
        default:
            return state;
    }
}
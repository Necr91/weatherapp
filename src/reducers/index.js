import { LOADING_SUCCES, SET_ROOT } from '../actions/index';
import { fromJS } from 'immutable';

const initialState = fromJS({
    data: {},
    loading: true,
    id: '',
    root: 'function'
});

export default function rootReducer(state = initialState, actions) {
    switch (actions.type) {
        
        case LOADING_SUCCES:
            return state.set('data', actions.data).set('loading', false);
        case SET_ROOT:
            return state.set('root', actions.root);

        // case LOADING_SUCCES:
        //     return {                
        //         data: actions.data,
        //         loading: false
        //     };
        // case TOWN_SELECT:
        //     return {
        //         loading: true,
        //         id: actions.id
        //     };
        // case SET_ROOT:
        //     return {
        //         ...state,
        //         root: actions.root
        //     }
        default:
            return state;
    }
}
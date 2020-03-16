import {
    SET_USER_PURCHASES
} from '../actions/types';

const INITIAL_STATE = {
    purchases: []
}

export default function(state = INITIAL_STATE, actions) {
    switch (actions.type) {
        case SET_USER_PURCHASES:
            return {
                ...state,
                purchases: actions.payload
            }
        default: return state;
    }
}
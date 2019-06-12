import {ADD_TICKET} from "../constants/action-types";
import {CHANGE_STATUS} from "../constants/action-types";

const initialState = {
    tickets: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TICKET :
            return Object.assign({}, state, {
                tickets: state.tickets.concat(action.payload)
            });
        case CHANGE_STATUS :
            return Object.assign({}, state, {
                tickets: state.tickets.concat(action.payload)
            });
        default:
            return state;
    }
}

export default rootReducer;
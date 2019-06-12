import {ADD_TICKET} from "../constants/action-types";

const initialState = {
    tickets: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_TICKET) {
        return Object.assign({}, state, {
            tickets: state.tickets.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;
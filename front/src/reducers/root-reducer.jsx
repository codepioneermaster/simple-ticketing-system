import {ADD_TICKET, LOAD_TICKETS} from "../constants/action-types";
import {CHANGE_STATUS} from "../constants/action-types";

import {STATUS_NEW} from "../constants/status-types";
import {STATUS_PROGRESS} from "../constants/status-types";
import {STATUS_REVIEW} from "../constants/status-types";
import {STATUS_DONE} from "../constants/status-types";

const initialState = {
    tickets: {
        [STATUS_NEW]: [],
        [STATUS_PROGRESS]: [],
        [STATUS_REVIEW]: [],
        [STATUS_DONE]: [],
    }
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TICKET :
            return Object.assign({}, state, {
                tickets: {
                    [STATUS_NEW]: state.tickets[STATUS_NEW].concat(action.payload.task),
                    [STATUS_PROGRESS]: state.tickets[STATUS_PROGRESS],
                    [STATUS_REVIEW]: state.tickets[STATUS_REVIEW],
                    [STATUS_DONE]: state.tickets[STATUS_DONE],
                }
            });
        case LOAD_TICKETS :
            let newState = Object.assign({}, state);
            newState.tickets[action.payload.status] = state.tickets[action.payload.status].concat(action.payload.tickets);

            return newState;
        case CHANGE_STATUS :
            let changeStatusState = Object.assign({}, state);

            changeStatusState.tickets[action.payload.ticket.status] = changeStatusState.tickets[action.payload.ticket.status].concat(action.payload.ticket);
            changeStatusState.tickets[action.payload.prevStatus] = changeStatusState.tickets[action.payload.prevStatus].filter(ticket => ticket.id !== action.payload.ticket.id);

            return changeStatusState;
        default:
            return state;
    }
}

export default rootReducer;
import {ADD_TICKET, LOAD_TICKETS, CHANGE_ASSIGNEE, CHANGE_STATUS} from "../constants/action-types";

import {STATUS_NEW, STATUS_PROGRESS, STATUS_REVIEW, STATUS_DONE} from "../constants/status-types";

const initialState = {
    tickets: {
        [STATUS_NEW]: {},
        [STATUS_PROGRESS]: {},
        [STATUS_REVIEW]: {},
        [STATUS_DONE]: {},
    }
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TICKET :
            let addedTicket = {
                [action.payload.task.id]: action.payload.task
            };

            return Object.assign({}, state, {
                tickets: {
                    [STATUS_NEW]: Object.assign({}, state.tickets[STATUS_NEW], addedTicket),
                    [STATUS_PROGRESS]: state.tickets[STATUS_PROGRESS],
                    [STATUS_REVIEW]: state.tickets[STATUS_REVIEW],
                    [STATUS_DONE]: state.tickets[STATUS_DONE],
                }
            });
        case LOAD_TICKETS :
            let newState = Object.assign({}, state);

            let newTickets = action.payload.tickets.reduce((obj, item) => {
                obj[item.id] = item
                return obj
            }, {});

            newState.tickets[action.payload.status] = Object.assign({}, state.tickets[action.payload.status], newTickets);

            return newState;
        case CHANGE_STATUS :
            let changeStatusState = Object.assign({}, state);

            changeStatusState.tickets[action.payload.ticket.status] = Object.assign({}, changeStatusState.tickets[action.payload.ticket.status], {[action.payload.ticket.id]: action.payload.ticket});

            delete changeStatusState.tickets[action.payload.prevStatus][action.payload.ticket.id];
            changeStatusState.tickets[action.payload.prevStatus] = Object.assign({}, changeStatusState.tickets[action.payload.prevStatus]);

            return changeStatusState;
        case CHANGE_ASSIGNEE :
            let changeAssigneeState = Object.assign({}, state);
            changeAssigneeState.tickets[action.payload.ticket.status][action.payload.ticket.id].user = action.payload.assignee;

            console.log(changeAssigneeState);

            return changeAssigneeState;
        default:
            return state;
    }
}

export default rootReducer;
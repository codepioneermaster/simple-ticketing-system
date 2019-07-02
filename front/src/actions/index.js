import {ADD_TICKET} from "../constants/action-types";
import {CHANGE_STATUS} from "../constants/action-types";
import {LOAD_TICKETS} from "../constants/action-types";

export function addTicket(payload) {
    return {type: ADD_TICKET, payload}
}

export function changeStatus(payload) {
    return {type: CHANGE_STATUS, payload}
}

export function loadTickets(payload) {
    return {type: LOAD_TICKETS, payload}
}
import {ADD_TICKET} from "../constants/action-types";
import {CHANGE_STATUS} from "../constants/action-types";

export function addTicket(payload) {
    return {type: ADD_TICKET, payload}
}

export function changeStatus(payload) {
    return {type: CHANGE_STATUS, payload}
}
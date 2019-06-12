import {ADD_TICKET} from "../constants/action-types";

export function addTicket(payload) {
    return {type: ADD_TICKET, payload}
}
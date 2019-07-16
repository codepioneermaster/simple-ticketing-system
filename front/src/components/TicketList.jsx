import React, {Fragment, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Ticket from "./Ticket";
import {LOAD_TICKETS} from "../constants/action-types";
import {BE_HOST} from "../constants/system-types";

/**
 * @param status
 * @returns {*}
 * @constructor
 */
const TicketList = ({status}) => {
    const [requestedTickets, setData] = useState({ tickets: [] });
    const dispatch = useDispatch();

    /**
     * Load tickets by status
     */
    useEffect(() => {
        const fetchTickets = async () => {
            const fetchResult = await fetch(BE_HOST +'/tasks' + '?status=' + status, {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            });
            const requestedTickets = await fetchResult.json();
            setData(requestedTickets);
            dispatch({type: LOAD_TICKETS, payload: {tickets: requestedTickets.tickets, status: status}});
        };

        fetchTickets();
    }, []);

    const tickets = useSelector(state => state.tickets[status]);

    return (<Fragment>
        {Object.values(tickets).map(ticket => {
            return (<Ticket key={ticket.id} {...ticket}/>)
        })}
    </Fragment>);
};

export default TicketList;
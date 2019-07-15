import React, {useEffect, useState} from "react";
import TicketForm from "./TicketForm";
import {BE_HOST} from "../constants/system-types";

const EditTicket = (props) => {
    const ticketId = props.match.params.id;
    const [requestedTicket, setTicket] = useState({});

    useEffect(() => {
        const fetchTicket = async (ticketId) => {
            const fetchResult = await fetch(BE_HOST + '/tasks/' + ticketId, {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            });
            return await fetchResult.json();
        };

        fetchTicket(ticketId).then(ticket =>
            setTicket(ticket)).catch(reason => console.log(reason.message));
    }, [ticketId]);

    return (
        <div className="row mt-4">
            <div className="col-md-12">
                <h3>Edit Ticket</h3>
                <TicketForm {...requestedTicket}/>
            </div>
        </div>
    )
};
export default EditTicket;
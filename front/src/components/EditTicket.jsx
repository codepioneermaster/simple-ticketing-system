import React, {useEffect, useState} from "react";
import TicketForm from "./TicketForm";

const EditTicket = (props) => {
    const ticketId = props.match.params.id;
    const [requestedTicket, setTicket] = useState({});

    useEffect(() => {
        const fetchTicket = async (ticketId) => {
            const fetchResult = await fetch('http://0.0.0.0:3000/tasks/' + ticketId, {
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
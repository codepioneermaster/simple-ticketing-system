import React, {useEffect, useState} from "react";
import TicketForm from "./TicketForm";

const EditTicket = (props) => {
    const ticketId = props.match.params.id;
    const [requestedTicket, setTicket] = useState({});

    useEffect(() => {
        const fetchTicket = async () => {
            const fetchResult = await fetch('http://0.0.0.0:3000/tasks/' + ticketId, {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            });
            const ticket = await fetchResult.json();

            setTicket(ticket);
        };

        fetchTicket();
    }, []);

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
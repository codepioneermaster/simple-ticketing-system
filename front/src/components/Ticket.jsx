import React, {useState} from "react";
import {Link} from "react-router-dom";
import {STATUSES_LIST} from "../constants/status-types";
import {useDispatch} from "react-redux";
import {CHANGE_STATUS} from "../constants/action-types";

const Ticket = (ticket) => {

    const [status, setStatus] = useState(ticket.status);
    const dispatch = useDispatch();

    const changeStatus = (status) => {
        let ticketToUpdate = Object.assign({}, ticket, {
            status: status
        });

        const updateTicket = async (ticketToUpdate) => {
            const fetchResponse = await fetch('http://0.0.0.0:3000/tasks/' + ticket.id, {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(ticketToUpdate)
            });

            return await fetchResponse.json();
        };

        updateTicket(ticketToUpdate).then(() => {
            dispatch({type: CHANGE_STATUS, payload: {ticket: ticketToUpdate, prevStatus: ticket.status}});
        }).catch(reason => console.log(reason.message));
    };

    return (
            <Link to={`/ticket/${ticket.id}`}>
                <div className="card mb-2 border-dark" key={ticket.id}>
                    <div className="card-body">
                        <h5 className="card-title">{ticket.summary}</h5>
                        <select value={status} onChange={(event) => {
                            changeStatus(event.target.value);
                            setStatus(event.target.value)
                        }}>
                            {STATUSES_LIST.map((status) => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </Link>
    )
};

export default Ticket;
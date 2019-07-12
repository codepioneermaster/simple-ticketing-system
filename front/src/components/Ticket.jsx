import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {STATUSES_LIST} from "../constants/status-types";
import {useDispatch} from "react-redux";
import {CHANGE_STATUS} from "../constants/action-types";

const Ticket = (ticket) => {

    const [status, setStatus] = useState(ticket.status);
    const [assignee, setAssignee] = useState(ticket.user ? ticket.user.id : '');
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAvailableUsers = async () => {
            const fetchResult = await fetch('http://0.0.0.0:3000/users', {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            });
            return await fetchResult.json();
        };

        fetchAvailableUsers().then(result =>
            setUsers(result.users)).catch(reason => console.log(reason.message));
    }, []);

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
        <div className="card mb-2 border-dark" key={ticket.id}>
            <div className="card-body">
                <Link to={`/ticket/${ticket.id}`}>
                    <h5 className="card-title">{ticket.summary}</h5>
                </Link>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="status">Status:</label>
                        </div>
                        <div className="col-md-6">
                            <select value={status} onChange={(event) => {
                                changeStatus(event.target.value);
                                setStatus(event.target.value)
                            }} id="status">
                                {STATUSES_LIST.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="assignee">Assignee:</label>
                        </div>
                        <div className="col-md-6">
                            <select value={assignee} onChange={(event) => console.log(event.target.value)} id="assignee">
                                <option value="">
                                    Unassigned
                                </option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Ticket;
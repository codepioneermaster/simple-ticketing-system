import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {STATUSES_LIST} from "../constants/status-types";
import {useDispatch} from "react-redux";
import {CHANGE_ASSIGNEE, CHANGE_STATUS} from "../constants/action-types";
import {
    PRIORITY_NEW,
    PRIORITY_LOW,
    PRIORITY_MEDIUM,
    PRIORITY_HIGH,
    PRIORITY_BLOCKER
} from "../constants/priority-types";

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
        const updateTicket = async (status, id) => {
            const fetchResponse = await fetch('http://0.0.0.0:3000/tasks/' + id, {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({status: status})
            });

            return await fetchResponse.json();
        };

        updateTicket(status, ticket.id).then(() => {
            setStatus(status);
            dispatch({
                type: CHANGE_STATUS, payload: {
                    ticket: ticket, status: status, prevStatus: ticket.status
                }
            });
        }).catch(reason => console.log(reason.message));
    };

    const changeAssignee = (assignee) => {
        const updateTicket = async (assignee, id) => {
            const fetchResponse = await fetch('http://0.0.0.0:3000/tasks/' + id, {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({assignee: assignee ? assignee : null})
            });

            return await fetchResponse.json();
        };

        updateTicket(assignee, ticket.id).then(() => {
            setAssignee(assignee);
            dispatch({
                type: CHANGE_ASSIGNEE,
                payload: {ticket: ticket, assignee: assignee ? users.find((user) => user.id == assignee) : null}
            });
        }).catch(reason => console.log(reason.message));
    };

    const getColorByPriority = (priority) => {
        switch (priority) {
            case PRIORITY_NEW :
                return '#000000';
            case PRIORITY_LOW :
                return '#166610';
            case PRIORITY_MEDIUM :
                return '#141b99';
            case PRIORITY_HIGH :
                return '#991497';
            case PRIORITY_BLOCKER :
                return '#991414';
            default :
                return '#459914';
        }
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
                            <select value={status} onChange={(event) => changeStatus(event.target.value)} id="status">
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
                            <select value={assignee} onChange={(event) => changeAssignee(event.target.value)}
                                    id="assignee">
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

                <span style={{color: getColorByPriority(ticket.priority)}}>{ticket.priority}</span>
            </div>
        </div>
    )
};

export default Ticket;
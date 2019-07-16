import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {STATUSES_LIST} from "../constants/status-types";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_ASSIGNEE, CHANGE_STATUS} from "../constants/action-types";
import {
    PRIORITY_NEW,
    PRIORITY_LOW,
    PRIORITY_MEDIUM,
    PRIORITY_HIGH,
    PRIORITY_BLOCKER
} from "../constants/priority-types";
import {BE_HOST} from "../constants/system-types";

/**
 * @param ticket
 * @returns {*}
 * @constructor
 */
const Ticket = (ticket) => {

    const [status, setStatus] = useState(ticket.status);
    const [assignee, setAssignee] = useState(ticket.user ? ticket.user.id : '');
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    /**
     * Change status handler
     *
     * @param status
     */
    const changeStatus = (status) => {
        const updateTicket = async (status, id) => {
            const fetchResponse = await fetch(BE_HOST + '/tasks/' + id, {
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

    /**
     * Reassign handler
     *
     * @param assignee
     */
    const changeAssignee = (assignee) => {
        const updateTicket = async (assignee, id) => {
            const fetchResponse = await fetch(BE_HOST + '/tasks/' + id, {
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

    /**
     * Simple vocabulary with priority styles
     *
     * @param priority
     * @returns {string}
     */
    const getClassByPriority = (priority) => {
        switch (priority) {
            case PRIORITY_NEW :
                return 'badge badge-dark';
            case PRIORITY_LOW :
                return 'badge badge-primary';
            case PRIORITY_MEDIUM :
                return 'badge badge-success';
            case PRIORITY_HIGH :
                return 'badge badge-warning';
            case PRIORITY_BLOCKER :
                return 'badge badge-danger';
            default :
                return 'badge badge-dark';
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

                <span className={getClassByPriority(ticket.priority)}>{ticket.priority}</span>
            </div>
        </div>
    )
};

export default Ticket;
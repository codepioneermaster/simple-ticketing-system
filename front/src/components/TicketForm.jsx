import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect} from "react-router-dom";

import {STATUS_NEW, STATUSES_LIST} from "../constants/status-types";
import {PRIORITY_NEW, PRIORITIES_LIST} from "../constants/priority-types";

import {ADD_TICKET} from "../constants/action-types";
import {BE_HOST} from "../constants/system-types";

const TicketForm = (ticket) => {
    const dispatch = useDispatch();

    const [summary, setSummary] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(PRIORITY_NEW);
    const [assignee, setAssignee] = useState('');
    const [status, setStatus] = useState(STATUS_NEW);
    const [users, setUsers] = useState(useSelector(state => state.users));
    const [id, setTicketId] = useState('');

    useEffect(() => {
        setSummary(ticket.summary);
        setDescription(ticket.description);
        setPriority(ticket.priority);
        if (ticket.hasOwnProperty('user')) {
            ticket.user !== null && setAssignee(ticket.user.id);
        }
        setStatus(ticket.status);
    }, [ticket]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTicket = {
            summary: summary,
            description: description,
            priority: priority,
            status: status,
            assignee: assignee ? assignee : null
        };

        ticket.id ? handleUpdate({...newTicket, id: ticket.id}) : handleCreate(newTicket);
    };

    const handleUpdate = (updatedTicket) => {

        const updateTicket = async (ticket) => {
            const fetchResponse = await fetch(BE_HOST +'/tasks/' + ticket.id, {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(ticket)
            });

            return await fetchResponse.json();
        };

        updateTicket(updatedTicket)
            .then(() => {
                setTicketId(updatedTicket.id);
            })
            .catch(reason => console.log(reason.message));
    };

    const handleCreate = (newTicket) => {
        const saveTicket = async (ticket) => {
            const fetchResponse = await fetch(BE_HOST +'/tasks', {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(ticket)
            });

            return await fetchResponse.json();
        };

        saveTicket(newTicket)
            .then((ticket) => {
                setTicketId(ticket.task.id);
                dispatch({type: ADD_TICKET, payload: {...ticket}});
            })
            .catch(reason => console.log(reason.message));
    };

    // Redirect after ticket create/update
    if (id) {
        return (<Redirect to="/"/>)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="summary">Summary</label>
                <input
                    type="text"
                    className="form-control"
                    id="summary"
                    value={summary}
                    onChange={(event) => setSummary(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" value={description}
                          onChange={(event) => setDescription(event.target.value)} id="description"/>
            </div>

            <div className="form-group">
                <div className="row">
                    <div className="col-md-1">
                        <label htmlFor="priority">Priority:</label>
                    </div>
                    <div className="col-md-1">
                        <select value={priority} onChange={(event) => setPriority(event.target.value)} id="priority">
                            {PRIORITIES_LIST.map((priority) => (
                                <option key={priority} value={priority}>
                                    {priority}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="row">
                    <div className="col-md-1">
                        <label htmlFor="assignee">Assignee:</label>
                    </div>
                    <div className="col-md-1">
                        <select value={assignee} onChange={(event) => setAssignee(event.target.value)} id="assignee">
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

            {status ?
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-1">
                            <label htmlFor="status">Status:</label>
                        </div>
                        <div className="col-md-1">
                            <select value={status} onChange={(event) =>
                                setStatus(event.target.value)
                            } id="status">
                                {STATUSES_LIST.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div> : null}


            <button type="submit" className="btn btn-success btn-lg">
                Save
            </button>
            <Link to="/" className="btn btn-secondary btn-lg ml-4">Cancel</Link>
        </form>
    )
};

export default TicketForm;
import React from "react";
import {changeStatus} from "../actions";
import {STATUSES_LIST} from "../constants/status-types";

const Ticket = (ticket) => {
        return (
            <div className="card mb-2 border-dark">
                <div className="card-body">
                    <h5 className="card-title">{ticket.summary}</h5>

                    <select value={ticket.status} onChange={changeStatus}>
                        {STATUSES_LIST.map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        )
};

export default Ticket;
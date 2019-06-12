import React from "react";
import {STATUSES_LIST} from "../constants/status-types";

const Ticket = (props) => (
    <div className="card mb-2 border-dark" key={props.id}>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>

            <select value={props.status}>
                {Object.keys(STATUSES_LIST).map((status, i) => (
                    <option key={status} value={status}>
                        {STATUSES_LIST[status]}
                    </option>
                ))}
            </select>
        </div>
    </div>
);

export default Ticket;
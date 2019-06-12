import React from "react";

const Ticket = (props) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
        </div>
    </div>
);

export default Ticket;
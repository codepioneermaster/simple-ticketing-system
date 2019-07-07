import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import TicketList from "./TicketList";

import {STATUS_NEW} from "../constants/status-types";
import {STATUS_PROGRESS} from "../constants/status-types";
import {STATUS_REVIEW} from "../constants/status-types";
import {STATUS_DONE} from "../constants/status-types";

const Board = () => (
    <div>
        <div className="row mb-4 mt-4">
            <div className="col-md-12 mb-4">
                <Link to="/ticket" className="btn btn-primary btn-lg">Add Ticket</Link>
            </div>
            <div className="col-md-12">
                <Link to="/user" className="btn btn-secondary btn-lgg">Add User</Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <h2 className="text-center">New</h2>
                <TicketList status={STATUS_NEW}/>
            </div>
            <div className="col-md-3">
                <h2 className="text-center">In Progress</h2>
                <TicketList status={STATUS_PROGRESS}/>
            </div>
            <div className="col-md-3">
                <h2 className="text-center">In Review</h2>
                <TicketList status={STATUS_REVIEW}/>
            </div>
            <div className="col-md-3">
                <h2 className="text-center">Done</h2>
                <TicketList status={STATUS_DONE}/>
            </div>
        </div>
    </div>
);
export default Board;
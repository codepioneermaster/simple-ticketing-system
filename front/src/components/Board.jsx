import React from "react";

import TicketList from "./TicketList";
import AddTicketForm from "./AddTicketForm";

import {STATUS_NEW} from "../constants/status-types";
import {STATUS_PROGRESS} from "../constants/status-types";
import {STATUS_REVIEW} from "../constants/status-types";
import {STATUS_DONE} from "../constants/status-types";

const Board = () => (
    <div>
        <div className="row mb-4">
            <div className="col-md-12">
                <AddTicketForm/>
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
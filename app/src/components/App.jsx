import React from "react";
import TicketList from "./TicketList";
import Form from "./Form";

import {STATUS_NEW} from "../constants/status-types";
import {STATUS_PROGRESS} from "../constants/status-types";
import {STATUS_REVIEW} from "../constants/status-types";
import {STATUS_DONE} from "../constants/status-types";

const App = () => (
    <div>
        <div className="row mb-4">
            <div className="col-md-12">
                <Form/>
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
export default App;
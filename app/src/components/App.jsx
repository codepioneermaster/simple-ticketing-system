import React from "react";
import TicketList from "./TicketList";
import Form from "./Form";

const App = () => (
    <div>
        <div className="row">
            <Form/>
        </div>
        <div className="row">
            <div className="col-md-3">
                <h2 className="text-center">New</h2>
                <TicketList/>
            </div>
            <div className="col-md-3">
                <h2 className="text-center">In Progress</h2>
            </div>
            <div className="col-md-3">
                <h2 className="text-center">In Review</h2>
            </div>
            <div className="col-md-3">
                <h2 className="text-center">Done</h2>
            </div>
        </div>
    </div>
);
export default App;
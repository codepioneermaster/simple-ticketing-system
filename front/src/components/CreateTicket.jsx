import React from "react";
import TicketForm from "./TicketForm";

/**
 * @returns {*}
 * @constructor
 */
const CreateTicket = () => {
    return (
        <div className="row mt-4">
            <div className="col-md-12">
                <h3>Create Ticket</h3>
                <TicketForm/>
            </div>
        </div>
    )
};
export default CreateTicket;
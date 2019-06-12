import React from "react";
import {connect} from "react-redux";
import Ticket from "./Ticket";

const mapStateToProps = state => {
    return {tickets: state.tickets};
};

const ConnectedTicketList = ({tickets}) => (
    <div>
        {tickets.map(el => (<Ticket title={el.title}/>))}
    </div>
);

const TicketList = connect(mapStateToProps)(ConnectedTicketList);
export default TicketList;
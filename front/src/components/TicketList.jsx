import React, {useEffect} from "react";
import {connect} from "react-redux";
import Ticket from "./Ticket";

const mapStateToProps = ((state, ownProps) => {
    return {tickets: state.tickets[ownProps.status]};
});

const ConnectedTicketList = ({tickets}) => {
    useEffect(() => {
    });
    return (<div>
        {tickets.map(el => (<Ticket key={el.id} title={el.title} status={el.ticket_status}/>))}
    </div>);
};

const TicketList = connect(mapStateToProps)(ConnectedTicketList);
export default TicketList;
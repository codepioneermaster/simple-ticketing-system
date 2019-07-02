import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Ticket from "./Ticket";
import {loadTickets} from "../actions";

const mapDispatchToProps = ((dispatch) => {
    return {
        loadTickets: (tickets, status) => dispatch(loadTickets({tickets: tickets, status: status}))
    };
});

const mapStateToProps = ((state, ownProps) => {
    return {tickets: state.tickets[ownProps.status], status: ownProps.status};
});

const ConnectedTicketList = ({tickets, status}) => {
    const [requestedTickets, setData] = useState({ tickets: [] });
    useEffect(() => {
        const fetchTickets = async () => {
            const fetchResult = await fetch('http://0.0.0.0:3000/tasks' + '?status=' + status, {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            });
            const requestedTickets = await fetchResult.json();
            console.log(requestedTickets);
            setData(requestedTickets);
        };

        fetchTickets();
    }, []);

    return (<div>
        {tickets.map(el => (<Ticket key={el.id} title={el.title} status={el.ticket_status}/>))}
    </div>);
};

const TicketList = connect(mapStateToProps)(ConnectedTicketList);
export default TicketList;
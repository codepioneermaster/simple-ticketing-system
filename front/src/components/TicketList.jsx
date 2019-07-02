import React, {useEffect, useState} from "react";
// import {connect} from "react-redux";
import {useSelector, useDispatch} from "react-redux";
import Ticket from "./Ticket";
import {loadTickets} from "../actions";
import {LOAD_TICKETS} from "../constants/action-types";

const mapDispatchToProps = ((dispatch) => {
    return {
        loadTickets: (tickets, status) => dispatch(loadTickets({tickets: tickets, status: status}))
    };
});

const mapStateToProps = ((state, ownProps) => {
    return {tickets: state.tickets[ownProps.status], status: ownProps.status};
});

const TicketList = ({status}) => {
    const [requestedTickets, setData] = useState({ tickets: [] });
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTickets = async () => {
            const fetchResult = await fetch('http://0.0.0.0:3000/tasks' + '?status=' + status, {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            });
            const requestedTickets = await fetchResult.json();
            setData(requestedTickets);
            dispatch({type: LOAD_TICKETS, payload: {tickets: requestedTickets.tickets, status: status}});
        };

        fetchTickets();
    }, []);

    const tickets = useSelector(state => state.tickets[status]);

    return (<div>
        {tickets.map(el => (<Ticket key={el.id} summary={el.summary} status={el.ticket_status}/>))}
    </div>);
};

// const TicketList = connect(mapStateToProps)(ConnectedTicketList);
export default TicketList;
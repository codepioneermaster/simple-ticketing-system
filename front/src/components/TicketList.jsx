import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Ticket from "./Ticket";

const mapStateToProps = ((state, ownProps) => {
    return {tickets: state.tickets[ownProps.status]};
});

const ConnectedTicketList = ({tickets}) => {
    const [tasks, setData] = useState({ tasks: [] });

    useEffect(() => {
        const fetchTasks = async () => {
            const fetchResult = await fetch('http://0.0.0.0:3000/tasks', {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            });
            const tasks = await fetchResult.json();
            console.log(tasks);
            setData(tasks);
        };

        fetchTasks();
    }, []);

    return (<div>
        {tickets.map(el => (<Ticket key={el.id} title={el.title} status={el.ticket_status}/>))}
    </div>);
};

const TicketList = connect(mapStateToProps)(ConnectedTicketList);
export default TicketList;
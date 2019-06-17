import React, {Component} from "react";
import {connect} from "react-redux";
import {changeStatus} from "../actions";
import {STATUS_NEW, STATUSES_LIST} from "../constants/status-types";

function mapDispatchToProps(dispatch) {
    return {
        changeStatus: ticket => dispatch(changeStatus(ticket))
    };
}

class ConnectedTicket extends Component {
    constructor() {
        super();

        this.state = {
            ticket_status: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();

        const title = this.props.title;
        const id = this.props.key;
        const ticket_status = event.target.value;

        this.props.changeStatus({title, id, ticket_status});
    }

    render() {
        return (
            <div className="card mb-2 border-dark" key={this.props.key}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>

                    <select value={this.props.status} onChange={this.handleChange}>
                        {Object.keys(STATUSES_LIST).map((status, i) => (
                            <option key={status} value={status}>
                                {STATUSES_LIST[status]}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}

const Ticket = connect(null, mapDispatchToProps)(ConnectedTicket);
export default Ticket;
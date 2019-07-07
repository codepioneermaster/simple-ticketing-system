import React, {useEffect, useState} from "react";
import {PRIORITIES_LIST} from "../constants/priority-types";

const CreateTicket = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchAvailableUsers = async () => {
            const fetchResult = await fetch('http://0.0.0.0:3000/users', {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            });
            const result = await fetchResult.json();
            setUsers(result.users);
        };

        fetchAvailableUsers();
    }, []);


    return (
        <div className="row mt-4">
            <div className="col-md-12">
                <h3>Create Ticket</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="summary">Summary</label>
                        <input
                            type="text"
                            className="form-control"
                            id="summary"
                            value=""
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            value=""
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="priority">Priority</label>
                        <select id="priority">
                            {PRIORITIES_LIST.map((priority) => (
                                <option key={priority} value={priority}>
                                    {priority}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="assignee">Assignee</label>
                        <select id="assignee">
                            <option value={null}>
                                Select user
                            </option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success btn-lg">
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
};
export default CreateTicket;
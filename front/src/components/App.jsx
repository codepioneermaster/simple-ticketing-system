import React, {useEffect} from "react";
import {Router, Route} from "react-router-dom";
import {createBrowserHistory} from "history";

import EditTicket from "./EditTicket";
import Board from "./Board";
import CreateTicket from "./CreateTicket";
import {useDispatch} from "react-redux";
import {LOAD_USERS} from "../constants/action-types";
import {BE_HOST} from "../constants/system-types";

const browserHistory = createBrowserHistory();

/**
 * @returns {*}
 * @constructor
 */
const App = () => {
    const dispatch = useDispatch();

    /**
     * Load users
     */
    useEffect(() => {
        const fetchAvailableUsers = async () => {
            const fetchResult = await fetch(BE_HOST + '/users', {
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            });
            return await fetchResult.json();
        };

        fetchAvailableUsers()
            .then(users =>
                dispatch({
                    type: LOAD_USERS, payload: users
                }))
            .catch(reason => console.log(reason.message));
    });

    return (
        <Router history={browserHistory}>
            <Route exact path="/" component={Board}/>
            <Route exact path="/ticket" component={CreateTicket}/>
            <Route exact path="/ticket/:id" component={EditTicket}/>
        </Router>
    );
};
export default App;
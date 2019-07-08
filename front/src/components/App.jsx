import React from "react";
import {Router, Route} from "react-router-dom";
import { createBrowserHistory } from "history";

import EditTicket from "./EditTicket";
import Board from "./Board";
import CreateTicket from "./CreateTicket";

const browserHistory = createBrowserHistory();

const App = () => (
    <Router history={browserHistory}>
        <Route exact path="/" component={Board}/>
        <Route exact path="/ticket" component={CreateTicket}/>
        <Route exact path="/ticket/:id" component={EditTicket}/>
    </Router>
);
export default App;
import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import EditTicket from "./EditTicket";
import Board from "./Board";
import CreateTicket from "./CreateTicket";

const App = () => (
    <Router>
        <Route exact path="/" component={Board}/>
        <Route exact path="/ticket" component={CreateTicket}/>
        <Route exact path="/ticket/:id" component={EditTicket}/>
    </Router>
);
export default App;
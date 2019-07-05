import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import EditTicket from "./EditTicket";
import Board from "./Board";

const App = () => (
    <Router>
        <Route exact path="/" component={Board}/>
        <Route path="/ticket" component={EditTicket}/>
    </Router>
);
export default App;
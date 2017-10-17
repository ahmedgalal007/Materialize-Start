'use strict'

import * as React from "react";
import * as ReactDOM from "react-dom";

var BrowserRouter = require( "react-router-dom").BrowserRouter;
var browserHistory = require( "react-router-dom").browserHistory;
var Link = require( "react-router-dom").Link;
var Switch = require( "react-router-dom").Switch;
var Route = require( "react-router-dom").Route;

import {Home} from './_components/Home'
import {NotFound} from './_components/NotFound'
export class Zagel extends React.Component{
    render(){
        return(
            <BrowserRouter history={browserHistory}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Zagel  />,
    document.getElementById('react-app')
);
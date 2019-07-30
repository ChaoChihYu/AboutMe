import React from 'react';
import ReactDOM from 'react-dom'; 

import { BrowserRouter, HashRouter, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router'
 
import { combineReducers, createStore, bindActionCreators } from 'redux'; 
import { Provider, connect } from 'react-redux' 

import { SidebarView, MainContainer } from "./Components/Common"; 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {  
        return (  
            <div> 
                <SidebarView />
                <MainContainer />
            </div> 
        );
    }
}

ReactDOM.render( 
    <BrowserRouter> 
        <App /> 
    </BrowserRouter> ,
    document.getElementById('main')
);

 
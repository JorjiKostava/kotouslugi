import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root'
import "./style.css"
import Header from "./header/header";
import Main from "./main/main";
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ServiceForm from "./ServiceForm/ServiceForm";
import Page404 from "./404/Page404";

class App extends Component {

    render() {
        return (
            <div className="ui container">
                <Header/>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/1" exact component={ServiceForm}/>
                        <Route component={Page404}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default process.env.NODE_ENV === 'production' ? App : hot(App)
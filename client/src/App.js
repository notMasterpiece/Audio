import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import LeftMenu from "./components/LeftMenu/LeftMenu";
import PlayPanel from "./components/PlayPanel/PlayPanelContainer";


import {Provider} from 'react-redux';
import store from './store/store';


// scenes
import HomeContainer from './scenes/Home/HomeContainer'
import Login from '../src/scenes/Auth/Login/Login'
import Header from "./components/Header/Header";


function App() {
    return (

        <Provider store={store}>
            <Router>

                <Header/>

                <LeftMenu/>
                <div className="ms_content_wrapper">

                    <Switch>
                        <Route exact path='/' component={HomeContainer}/>
                        <Route path='/auth/sing-in' component={Login}/>
                    </Switch>


                </div>

                <PlayPanel/>

            </Router>

        </Provider>
    );
}

export default App;




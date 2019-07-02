import {combineReducers} from 'redux';
import app from './app';
import auth from './auth';
import audio from './audio/';



export default combineReducers({
    app,
    player: audio,
    auth
});
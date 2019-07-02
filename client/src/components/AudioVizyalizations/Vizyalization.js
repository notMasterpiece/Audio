import React, { useState, useEffect } from 'react';
import './vizyalization.scss';

import {init} from "./animation";

const Vizyalization = () => {


    useEffect(() => {
        init();
    }, []);


    return (
        <div className='vizyalization'>
            <div id="menu">
                <a id="btStartAudioVisualization" className="bt">Start Audio Visualization</a>
                <input id="btLoadAudio" type="file" accept="audio/*"/>
                <label id="labelLoadAudio" htmlFor="btLoadAudio" className="bt">Load Audio</label>
            </div>

            <div id="txtStatus"/>
        </div>
    );
};

export default Vizyalization;
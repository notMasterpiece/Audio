import React from 'react';
import PropTypes from 'prop-types';

import PlayPanelVolume from './PlayPanelVolume';
import {IoMdRepeat} from "react-icons/io";

const PlayPanelRight = ({
    changeVolume,
    volume,
    defaultVolume,
    loop,
    handleAudioLoop
}) => {

    return (
        <div className="jp-volume-wrap">

            <PlayPanelVolume
                changeVolume={changeVolume}
                volume={volume}
                defaultValue={defaultVolume}
            />

            <IoMdRepeat
                onClick={handleAudioLoop}
                size={30}
                color={loop ? 'white' : '#909090'}
            />

        </div>
    );
};

PlayPanelRight.propTypes = {
    changeVolume: PropTypes.func.isRequired,
    defaultVolume: PropTypes.number.isRequired,
};

export default PlayPanelRight;
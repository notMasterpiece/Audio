import React from 'react';
import PropTypes from 'prop-types';
import PlayPanelVolume from './PlayPanelVolume';
import audio from '../../../audio';
import {connect} from 'react-redux';
import {changeVolume} from '../../../modules/audio/audioAction'

const PlayPanelVolumeContainer = ({volume, changeVolume}) => {

    const setVolume = value => {
        audio.setVolume(value);
        changeVolume(value);
    };


    return (
        <PlayPanelVolume
            volume={volume}
            setVolume={setVolume}
        />
    );
};

PlayPanelVolumeContainer.propTypes = {
    volume: PropTypes.number.isRequired,
};

export default connect(state => ({
    volume: state.player.volume
}), {changeVolume})(PlayPanelVolumeContainer);
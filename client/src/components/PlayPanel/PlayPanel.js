import React from 'react';
import PropTypes from 'prop-types';

import PlayPanelRight from './PlayPanelRight'
import PlayPanelProgressBar from './PlayPanelProgressBar'
import PlayPanelAudioInfo from './PlayPanelAudioInfo'
import './playerPanel.scss';

import {
    IoIosPlay,
    IoIosPause,
    IoMdSkipForward,
    IoMdSkipBackward
} from "react-icons/io";

const PlayPanel = ({
    audioList,
    currentAudio,
    isLoading,
    loop,
    audio,
    handleMetadata,
    handleTimeupdate,
    currentAudioObj,
    isPlaying,
    handlePlay,
    handlePlayNext,
    handlePlayPrev,
    volume,
                       defaultVolume,
    duration,
    changeVolume,
    currentTime,
    handleAudioLoop,
    setAudioDuration,
    currentTrackMoment,
    currentTrackDuration
}) => {


    if(!audio) return null;


    return (
        <div className="ms_player_wrapper">
            <div className="ms_player_close">
                <i className="fa fa-angle-up" aria-hidden="true"/>
            </div>
            <div className="player_mid">
                <div className="audio-player">

                    <div className='jp-audio'>

                        <PlayPanelProgressBar
                            audio={audio}
                            setAudioDuration={setAudioDuration}
                        />

                        <PlayPanelAudioInfo
                            isLoading={isLoading}
                            isPlaying={isPlaying}
                            duration={duration}
                            currentTime={currentTime}
                            currentAudioObj={currentAudioObj}
                        />

                        <div className="jp-controls flex-item">
                            <button
                                className="jp-previous"
                                onClick={handlePlayPrev}
                            >
                                <IoMdSkipBackward size={25} color={'white'}/>
                            </button>

                            <button
                                className="jp-play"
                                onClick={handlePlay}
                            >
                                {isPlaying
                                    ? <IoIosPause size={50} style={{transform: 'translateX(2px)'}} color={'white'}/>
                                    : <IoIosPlay size={50} style={{transform: 'translateX(5px)'}} color={'white'}/>
                                }

                            </button>

                            <button
                                className="jp-next"
                                onClick={handlePlayNext}
                            >
                                <IoMdSkipForward size={25} color={'white'}/>
                            </button>
                        </div>

                        <PlayPanelRight
                            volume={volume}
                            defaultVolume={defaultVolume}
                            changeVolume={changeVolume}

                            loop={loop}
                            handleAudioLoop={handleAudioLoop}
                        />

                    </div>

                </div>
            </div>

        </div>
    );
};

PlayPanel.propTypes = {
    audioList: PropTypes.array,
    currentAudio: PropTypes.number,
};

export default PlayPanel;



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
    isLoading,
    loop,
    audio,
    currentAudioObj,
    handlePlay,
    handlePlayNext,
    handlePlayPrev,
    volume,
    defaultVolume,
    duration,
    changeVolume,
    currentTime,
    handleAudioLoop,

    togglePlayPanel,
    showPlayPanel,

    player,
}) => {


    return (
        <div
            className={`ms_player_wrapper ${showPlayPanel ? '' : 'close_player'}`}
        >

            <div
                className="ms_player_close"
                onClick={togglePlayPanel}
            >
                <i
                    className="fa fa-angle-up"
                    aria-hidden="true"
                />
            </div>

            <div className="player_mid">
                <div className="audio-player">

                    <div className='jp-audio'>

                        <PlayPanelProgressBar
                            audio={audio}
                            duration={duration}
                            currentTime={currentTime}
                        />

                        <PlayPanelAudioInfo
                            isLoading={isLoading}
                            player={player}
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
                                {player.isPlaying
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



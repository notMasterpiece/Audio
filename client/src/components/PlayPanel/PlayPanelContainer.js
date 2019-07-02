import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {togglePlayPanel} from '../../modules/app/appActions';
import {playNextAudio, playAudio} from '../../modules/audio/audioAction';

import PlayPanel from './PlayPanel';

const defaultVolume = 60;

class PlayPanelContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            audio: null,
            audioId: this.props.audioId,
            duration: 0,
            currentTime: 0,
            isPlaying: this.props.isPlaying,
            isLoading: true,
            volume: defaultVolume,
            loop: false
        };
    }


    handlePlay = () => {
        const {audio} = this.state;

        if (audio.paused || audio.ended) {
            audio.play();
            this.setState({isPlaying: true});
        } else {
            audio.pause();
            this.setState({isPlaying: false});
        }
    };


    // getMetadata = () => {
    //     const {audio} = this.state;
    //     const duration = Math.floor(audio.duration);
    //     console.log(duration);
    // };


    handlePlayNext = () => {
        const {currentAudio} = this.state;
        this.setState({
            isLoading: true,
            currentAudio: currentAudio + 1
        }, () => {

            const {audio, currentAudio} = this.state;
            audio.src = this.props.audioList[currentAudio].url;

            audio.onloadedmetadata = () => {
                console.log(audio.duration);
                this.setState({
                    isLoading: false,
                    isPlaying: true,
                    duration: audio.duration
                })
            };
            audio.ontimeupdate = () => {
                this.setState({
                    currentTime: audio.currentTime
                })
            };
            audio.play();
        });

    };


    handlePlayPrev = () => {
        const {currentAudio} = this.state;
        this.setState({
            isLoading: true,
            currentAudio: currentAudio - 1
        }, () => {

            const {audio, currentAudio} = this.state;
            audio.src = this.props.audioList[currentAudio].url;

            audio.onloadedmetadata = () => {
                console.log(audio.duration);
                this.setState({
                    isLoading: false,
                    isPlaying: true,
                    duration: audio.duration
                })
            };
            audio.ontimeupdate = () => {
                this.setState({
                    currentTime: audio.currentTime
                });
                if (audio.currentTime === audio.duration) {
                    audio.pause();
                    this.setState({isPlaying: false});
                }
            };
            audio.play();
        });

    };


    componentDidUpdate(prevProps, state) {
        // console.log(this.props.audio, 'this.props');
        // console.log(prevProps.audio);

        if (!this.props.player.isPlaying) {

            if (state.audio && !state.audio.paused) {
                state.audio.pause();
            }
        }

        if (this.props.player.audioId !== prevProps.player.audioId) {
            this.changeAudio(this.props.player.audioId);
        }
    }



    changeAudio = (audioId) => {
        console.log(audioId);
        const {audio} = this.state;
        audio.pause();

        const {player} = this.props;
        const newAudio = player.audioList.filter(audio => audio.id === audioId);

        this.setState({
            isLoading: true,
            audio: new Audio(newAudio[0].url),
        }, () => {

            const {audio} = this.state;
            audio.onloadedmetadata = () => {
                this.setState({
                    isLoading: false,
                    duration: audio.duration
                })
            };
            audio.ontimeupdate = () => {
                this.setState({
                    currentTime: audio.currentTime
                });
                if (audio.currentTime === audio.duration) {
                    audio.pause();
                    this.setState({isPlaying: false});
                }
            };

            this.playAudio();

        });

    };


    playAudio = () => {
        const {playAudio} = this.props;
        const {audio} = this.state;

        playAudio();
        audio.play();
    };


    changeVolume = value => {
        const {audio} = this.state;

        this.setState({volume: value});
        audio.volume = value / 100;
    };

    handleAudioLoop = () => {
        const {audio, loop} = this.state;

        if (loop) {
            audio.loop = false;
            this.setState({loop: false});
        } else {
            audio.loop = true;
            this.setState({loop: true});
        }
    };


    setAudioDuration = currentTime => {
        const {audio} = this.state;
        this.setState({currentTime});
        audio.currentTime = currentTime;
    };

    componentDidMount() {

        const {audioList, audioId} = this.props.player;
        const newAudio = audioList.filter(audio => audio.id === audioId);

        this.setState({
            audio: new Audio(newAudio[0].url),
        }, () => {

            const {audio} = this.state;
            audio.onloadedmetadata = () => {
                this.setState({
                    isLoading: false,
                    duration: audio.duration
                })
            };
            audio.ontimeupdate = () => {
                this.setState({
                    currentTime: audio.currentTime
                });
                if (audio.currentTime === audio.duration) {
                    audio.pause();
                    this.setState({isPlaying: false});
                }
            }
        });
    }


    render() {
        const {audio, isPlaying, volume, isLoading, duration, currentTime, loop} = this.state;
        const {togglePlayPanel, showPlayPanel, player} = this.props;




        return (
            <PlayPanel
                isLoading={isLoading}
                currentAudioObj={player.audioList.filter(audio => audio.id === player.audioId)[0]}
                audio={audio}
                isPlaying={isPlaying}
                handlePlay={this.handlePlay}
                handlePlayNext={this.handlePlayNext}
                handlePlayPrev={this.handlePlayPrev}
                defaultVolume={defaultVolume}
                volume={volume}
                changeVolume={this.changeVolume}
                duration={duration}
                currentTime={currentTime}
                loop={loop}
                handleAudioLoop={this.handleAudioLoop}
                setAudioDuration={this.setAudioDuration}

                togglePlayPanel={togglePlayPanel}
                showPlayPanel={showPlayPanel}


                player={player}

                // audioPlayer={audioPlayer}
                // handleMetadata={handleMetadata}
                // handleTimeupdate={handleTimeupdate}

                // currentTrackMoment={currentTrackMoment}
                // currentTrackDuration={currentTrackDuration}
                // currentAudio={currentAudio}
            />
        );
    }
}

PlayPanelContainer.propTypes = {
    player: PropTypes.object,
    playNextAudio: PropTypes.func,
};

export default connect(state => ({
    player: state.player,
    showPlayPanel: state.app.showPlayPanel
}), {playNextAudio, togglePlayPanel, playAudio})(PlayPanelContainer);
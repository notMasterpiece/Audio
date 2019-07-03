import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {togglePlayPanel} from '../../modules/app/appActions';
import {playNextAudio, playPrevAudio, playAudio, audioLoaded} from '../../modules/audio/audioAction';

import PlayPanel from './PlayPanel';

import audio from '../../audio';

const defaultVolume = 60;

class PlayPanelContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            audio: null,
            audioId: this.props.audioId,
            duration: 0,
            currentTime: 0,
            volume: defaultVolume,
            loop: false
        };
    }


    handlePlay = () => {
        // const {audio} = this.state;
        //
        // if (audio.paused || audio.ended) {
        //     audio.play();
        //     this.setState({isPlaying: true});
        // } else {
        //     audio.pause();
        //     this.setState({isPlaying: false});
        // }
    };


    handlePlayNext = () => {

        this.props.playNextAudio();
    };


    handlePlayPrev = () => {

        this.props.playPrevAudio();

    };


    componentDidUpdate(prevProps, state) {
        const {player} = this.props;
        this.changeAudioState(player);

        if(prevProps.player.audioId !== this.props.player.audioId) {
            audio.pause();
            audio.init(this.getCurrentAudio());
            audio.loadedmetadata(duration => {
                console.log(duration);
                audio.play();
            });
        }
        console.log(prevProps);
        console.log(this.props);

    }


    changeAudioState = () => {

        const {player} = this.props;
        const {isPlaying} = player;

        if (isPlaying) {
            // console.log('play');



            if (!audio.isAudioInitialization() ) {
                audio.init(this.getCurrentAudio());
                audio.loadedmetadata(duration => {
                    console.log(duration);
                    audio.play();
                });
            } else {
                if(player.isLoading) {
                    this.props.audioLoaded();
                }
                audio.play();
            }




        } else {
            // console.log('pause');
            audio.pause();
        }
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

    getCurrentAudio = () => {
        const {player} = this.props;
        const {currentPlaylistId, playerLists, audioId} = player;

        const currentPlayerList = playerLists.filter(list => list.id === currentPlaylistId)[0].audioList;
        const currentAudio = currentPlayerList.filter(audio => audio.id === audioId)[0];

        return currentAudio;
    };

    componentDidMount() {

        audio.init(this.getCurrentAudio());

        audio.loadedmetadata(duration => {
            console.log(duration);
            this.props.audioLoaded()
        });
    }


    render() {
        const {audio, isPlaying, volume, duration, currentTime, loop} = this.state;
        const {togglePlayPanel, showPlayPanel, player} = this.props;

        return (
            <PlayPanel
                isLoading={player.isLoading}
                currentAudioObj={this.getCurrentAudio()}
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
                playNextAudio={playNextAudio}
            />
        );
    }
}

PlayPanelContainer.propTypes = {
    player: PropTypes.object,
    playNextAudio: PropTypes.func,
};

export default connect((state) => ({
    player: state.player,
    showPlayPanel: state.app.showPlayPanel
}), {playNextAudio, playPrevAudio, togglePlayPanel, playAudio, audioLoaded})(PlayPanelContainer);
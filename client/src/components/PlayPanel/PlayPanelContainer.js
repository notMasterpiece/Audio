import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {playNextAudio} from '../../modules/audio/audioAction';

import PlayPanel from './PlayPanel';

const defaultVolume = 60;

class PlayPanelContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            audio: null,
            currentAudio: 0,
            duration: 0,
            currentTime: 0,
            isPlaying: false,
            isLoading: true,
            volume: defaultVolume,
            loop: false
        };
    }


    handlePlay = () => {
        const {audio} = this.state;

        if (audio.paused || audio.ended) {
            audio.play();
            this.setState({ isPlaying: true });
        } else {
            audio.pause();
            this.setState({ isPlaying: false });
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
                    this.setState({ isPlaying: false });
                }
            };
            audio.play();
        });

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
            this.setState({ loop: false });
        } else {
            audio.loop = true;
            this.setState({ loop: true });
        }
    };


    setAudioDuration = currentTime => {
        const {audio} = this.state;
        this.setState({ currentTime });
        audio.currentTime = currentTime;
    };

    componentDidMount() {
        const {currentAudio} = this.state;

        this.setState({
            audio: new Audio(this.props.audioList[currentAudio].url),
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
                    this.setState({ isPlaying: false });
                }
            }
        });
    }


    render() {
        const {audio, isPlaying, volume, isLoading, duration, currentTime, currentAudio, loop} = this.state;

        console.log(this.state);

        return (
            <PlayPanel
                isLoading={isLoading}
                currentAudioObj={this.props.audioList[currentAudio]}
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
    audioList: PropTypes.array,
    playNextAudio: PropTypes.func,
};

export default connect(state => ({
    audioList: state.audio.audioList,
}), {playNextAudio})(PlayPanelContainer);







// const PlayPanelContainer = ({audioList, currentAudio}) => {
//
//
//     const [loop, setLoop] = useState(false);
//
//


//
//
//     const handleTimeupdate = () => {
//         setCurrentTrackMoment(Math.floor(audioPlayer.current.currentTime));
//         setProgressBarWidth(
//             (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100 + '%'
//         );
//
//     };
//
//
//
//     return (
//         <PlayPanel
//             audioList={audioList}
//             loop={loop}
//             audioPlayer={audioPlayer}
//             handleMetadata={handleMetadata}
//             handleTimeupdate={handleTimeupdate}
//             isPlaying={isPlaying}
//             handlePlay={handlePlay}
//             volume={volume}
//             defaultValue={defaultValue}
//             changeVolume={changeVolume}
//             handleAudioLoop={handleAudioLoop}
//             setAudioDuration={setAudioDuration}
//             currentTrackMoment={currentTrackMoment}
//             currentTrackDuration={currentTrackDuration}
//             currentAudio={currentAudio}
//         />
//     );
//
// };
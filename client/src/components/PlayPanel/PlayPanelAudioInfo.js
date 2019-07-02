import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlayAnimation from '../../components/AudioVizyalizations/SmallCssVizyalization/PlayAnimation';
import loader from '../../assets/images/loader.gif';
import {normalizeAudioCurentTime, formatSecondsAsTime} from "../../helpers/helpers";


const AudioWrap = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
`;

const AudioImage = styled.div`
  width: 60px;
  min-width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  img {
    max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
`;

const AudioName = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #777777;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AudioInfo = styled.div`
  max-width: 100%;
`;


const PlayPanelAudioInfo = ({
    duration,
    currentTime,
    isPlaying,
    currentAudioObj,
    isLoading,
}) => {


    if (isLoading) {
        return (
            <AudioWrap>
                <AudioImage>
                    <img src={loader} alt={currentAudioObj.title}/>
                </AudioImage>
                <span>Loading ...</span>
            </AudioWrap>
        )
    }

    return (
        <AudioWrap
            title={currentAudioObj.title}
        >
            <AudioImage>
                <Fragment>
                    <img src={currentAudioObj.image} alt={currentAudioObj.title}/>
                    {isPlaying && <PlayAnimation/>}
                </Fragment>
            </AudioImage>
            <AudioInfo>
                <AudioName>{currentAudioObj.title}</AudioName>
                <div className="audio-time">
                    {formatSecondsAsTime(currentTime)}
                    {' / '}
                    {formatSecondsAsTime(duration)}
                </div>
            </AudioInfo>
        </AudioWrap>
    );
};

PlayPanelAudioInfo.propTypes = {
    duration: PropTypes.number,
    currentTrackMoment: PropTypes.string,
    isPlaying: PropTypes.bool,
    currentAudioObj: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default PlayPanelAudioInfo;
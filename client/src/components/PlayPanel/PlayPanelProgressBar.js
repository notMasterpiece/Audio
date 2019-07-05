import React from 'react';
import PropTypes from 'prop-types';
import Slider  from 'rc-slider';
import styled from 'styled-components';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderWithTooltip = createSliderWithTooltip(Slider);

const PlayPanelProgressBar = ({duration, currentTime}) => {

    return (
        <ProgresWrap>
            <SliderWithTooltip
                value={ currentTime }
                max={ duration }
                step={0.01}
                // onChange={ value => setAudioDuration(value) }
                // tipFormatter={value => formatSecondsAsTime(currentTime)}
            />
        </ProgresWrap>
    );
};

PlayPanelProgressBar.propTypes = {
    audio: PropTypes.object,
};


const ProgresWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .rc-slider {
    padding: 0;
  }
`;

export default PlayPanelProgressBar;
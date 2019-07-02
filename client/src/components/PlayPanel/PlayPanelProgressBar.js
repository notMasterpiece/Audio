import React from 'react';
import PropTypes from 'prop-types';
import Slider  from 'rc-slider';
import styled from 'styled-components';

import {normalizeAudioCurentTime} from '../../helpers/helpers';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderWithTooltip = createSliderWithTooltip(Slider);

const PlayPanelProgressBar = ({audio, setAudioDuration}) => {

    if (!audio) return null;

    return (
        <ProgresWrap>
            <Slider
                value={ audio.currentTime }
                max={ audio.duration }
                step={0.01}
                onChange={ value => setAudioDuration(value) }
                // tipFormatter={value => normalizeAudioCurentTime(value)}
            />
        </ProgresWrap>
    );
};

PlayPanelProgressBar.propTypes = {

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
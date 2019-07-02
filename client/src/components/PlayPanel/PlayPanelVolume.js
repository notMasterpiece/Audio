import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {IoIosVolumeHigh, IoIosVolumeOff} from "react-icons/io";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderWithTooltip = createSliderWithTooltip(Slider);


const PlayPanelVolume = ({volume, changeVolume, defaultValue}) => {
    return (
        <Fragment>
            <SliderWithTooltip
                value={volume}
                onChange={value => changeVolume(value)}
                tipFormatter={value => `${value}%`}
            />

            <div
                className="jp-volume-image"
                onClick={(volume > 0) ? () => changeVolume(0) : () => changeVolume(defaultValue)}
            >
                {volume > 0
                    ? <IoIosVolumeHigh size={30} color={'#909090'}/>
                    : <IoIosVolumeOff size={30} color={'#909090'}/>
                }

            </div>
        </Fragment>
    );
};

PlayPanelVolume.propTypes = {
    volume: PropTypes.number.isRequired,
    changeVolume: PropTypes.func.isRequired,
    defaultValue: PropTypes.number.isRequired,
};

export default PlayPanelVolume;
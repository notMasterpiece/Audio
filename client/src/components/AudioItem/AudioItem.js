import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './audioItem.scss';
import more from "../../assets/images/svg/more.svg";
import play from "../../assets/images/svg/play.svg";

import {setCurrentAudio} from '../../modules/audio/audioAction';
import {connect} from 'react-redux';

const AudioItem = ({audio, dispatch}) => {

    const {title, author, image, id} = audio;

    return (
        <div
            className="swiper-slide"
            onClick={() => dispatch(setCurrentAudio(id))}
            >
            <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                    <img src={image} alt={title} />
                    <div className="ms_main_overlay">
                        <div className="ms_box_overlay"/>
                        <div className="ms_more_icon">
                            <img src={more} alt=""/>
                        </div>
                        <div className="ms_play_icon">
                            <img src={play} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="ms_rcnt_box_text">
                    <h3><Link to={`/${title}`}>{title}</Link></h3>
                    <p>{author}</p>
                </div>
            </div>
        </div>
    );
};

AudioItem.propTypes = {
    audio: PropTypes.object,
    dispatch: PropTypes.func,
};

export default connect()(AudioItem);
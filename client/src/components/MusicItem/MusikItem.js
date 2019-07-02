import React from 'react';
import PropTypes from 'prop-types';

import './audioItem.scss';
import more from "../../assets/images/svg/more.svg";
import play from "../../assets/images/svg/play.svg";

import {setCurrentAudio} from '../../modules/audio/audioAction';
import {connect} from 'react-redux';

const MusikItem = ({audio, dispatch}) => {
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
                        <ul className="more_option">
                            <li><a href="#"><span className="opt_icon"><span
                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                            <li><a href="#"><span className="opt_icon"><span
                                className="icon icon_queue"/></span>Add To Queue</a></li>
                            <li><a href="#"><span className="opt_icon"><span
                                className="icon icon_dwn"/></span>Download Now</a></li>
                            <li><a href="#"><span className="opt_icon"><span
                                className="icon icon_playlst"/></span>Add To Playlist</a></li>
                            <li><a href="#"><span className="opt_icon"><span
                                className="icon icon_share"/></span>Share</a></li>
                        </ul>
                        <div className="ms_play_icon">
                            <img src={play} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="ms_rcnt_box_text">
                    <h3><a href="#">{title}</a></h3>
                    <p>{author}</p>
                </div>
            </div>
        </div>
    );
};

MusikItem.propTypes = {

};

export default connect()(MusikItem);
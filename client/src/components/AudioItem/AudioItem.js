import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './audioItem.scss';
import { IoMdHeartEmpty, IoIosPlay, IoIosPause } from "react-icons/io";

import {pauseAudio, playAudio} from '../../modules/audio/audioAction';
import {connect} from 'react-redux';

const AudioItem = ({audio, dispatch, player, listId}) => {

    const {title, author, image, id} = audio;

    return (
        <div className="swiper-slide" >
            <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                    <img src={image} alt={title} />
                    <div className="ms_main_overlay">
                        <div className="ms_box_overlay"/>


                        <div className="ms_more_icon">
                            <IoMdHeartEmpty
                                size={24}
                                color={'white'}
                                onClick={() => alert(`id: ${id}`) }
                            />
                        </div>
                        <div className="ms_play_icon">
                            {((id === player.audioId) && player.isPlaying)
                                    ?   <IoIosPause
                                            size={24}
                                            color={'white'}
                                            onClick={() => dispatch(pauseAudio())}
                                        />
                                    :   <IoIosPlay
                                            size={24}
                                            color={'white'}
                                            onClick={() => dispatch(playAudio({id, listId}))}
                                         />
                            }

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
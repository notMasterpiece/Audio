import React from 'react';
import PropTypes from 'prop-types';
import "react-id-swiper/src/styles/scss/swiper.scss";
import Swiper from 'react-id-swiper';
import {Link} from 'react-router-dom';

import AudioItem from '../AudioItem/AudioItem'
import './recentlyPlayer.scss'


const RecentlyPlayed = ({player}) => {
    const params = {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: false,
        speed: 1500,
        navigation: {
            nextEl: '.swiper-button-next5',
            prevEl: '.swiper-button-prev5',
        },
        breakpoints: {
            1800: {
                slidesPerView: 5,
            },
            1400: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 1,
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
    };

    return (

        <div className='ms_rcnt_slider'>
            <div className="ms_heading">
                <h1>Recently Played</h1>
                <span className="veiw_all">
                    <Link to="/more">view more</Link>
                </span>
            </div>

            <Swiper {...params}>
                {
                    player.audioList.map(audio => {
                        return (
                            <AudioItem
                                key={audio.id}
                                audio={audio}
                                player={player}
                            />
                        )
                    })
                }
            </Swiper>

        </div>


    )
};

RecentlyPlayed.propTypes = {
    player: PropTypes.object,
};

export default RecentlyPlayed;
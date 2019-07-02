import React from 'react';
import PropTypes from 'prop-types';
import "react-id-swiper/src/styles/scss/swiper.scss";
import Swiper from 'react-id-swiper';

import MusikItem from '../../components/MusicItem/MusikItem'
import './recentlyPlayer.scss'


const RecentlyPlayed = ({audioList}) => {
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
    }

    return (

        <div className='ms_rcnt_slider'>
            <div className="ms_heading">
                <h1>Recently Played</h1>
                <span className="veiw_all"><a href="#">view more</a></span>
            </div>

            <Swiper {...params}>
                {
                    audioList.map(audio => {
                        return (
                            <MusikItem
                                key={audio.id}
                                audio={audio}
                            />
                        )
                    })
                }
            </Swiper>

        </div>


    )
};

RecentlyPlayed.propTypes = {
    audioList: PropTypes.array
};

export default RecentlyPlayed;
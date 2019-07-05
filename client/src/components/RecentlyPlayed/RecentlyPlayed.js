import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import "react-id-swiper/src/styles/scss/swiper.scss";
import Swiper from 'react-id-swiper';

import AudioItem from '../AudioItem/AudioItem'
import './recentlyPlayer.scss'


const RecentlyPlayed = ({player}) => {
    const params = {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: false,
        speed: 1500,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
        <Fragment>
            {
                player.playerLists.map(list => (
                    <div
                        key={list.id}
                        className='ms_rcnt_slider'
                    >
                        <div className="ms_heading">
                            <h1>{list.name}</h1>
                        </div>

                        <Swiper {...params}>
                            {
                                list.audioList.map(audio => {
                                    return (
                                        <AudioItem
                                            key={audio.id}
                                            listId={list.id}
                                            audio={audio}
                                            player={player}
                                        />
                                    )
                                })
                            }
                        </Swiper>

                    </div>
                ))
            }
        </Fragment>


    )
};

RecentlyPlayed.propTypes = {
    player: PropTypes.object,
};

export default RecentlyPlayed;
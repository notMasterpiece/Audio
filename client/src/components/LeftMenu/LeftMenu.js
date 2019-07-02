import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './LeftMenu.scss';

const LeftMenu = props => {
    return (
        <div className="ms_sidemenu_wrapper">
            <div className="ms_nav_close">
                <i className="fa fa-angle-right" aria-hidden="true"/>
            </div>
            <div className="ms_sidemenu_inner">
                <div className="ms_logo_inner">
                    <div className="ms_logo">
                        <a href="index.html">
                            <img src="images/logo.png" alt="" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="ms_logo_open">
                        <a href="index.html"><img src="images/open_logo.png" alt="" className="img-fluid"/></a>
                    </div>
                </div>
                <div className="ms_nav_wrapper mCustomScrollbar _mCS_1 mCS-autoHide">
                    <div id="mCSB_1" className="mCustomScrollBox mCS-minimal mCSB_vertical mCSB_outside"
                         tabIndex="0">
                        <div id="mCSB_1_container" className="mCSB_container"
                             dir="ltr">
                            <ul>
                                <li>
                                    <Link to={'/'} className="active">
                                        <span className="nav_icon">
                                            <span className="icon icon_discover"/>
                                        </span>
                                        <span className="nav_text">
                                            discover
                                        </span>
                                    </Link>
                                </li>
                                <li><a href="album.html" title="Albums">
						<span className="nav_icon">
							<span className="icon icon_albums"/>
						</span>
                                    <span className="nav_text">
							albums
						</span>
                                </a>
                                </li>
                                <li><a href="artist.html" title="Artists">
						<span className="nav_icon">
							<span className="icon icon_artists"></span>
						</span>
                                    <span className="nav_text">
							artists
						</span>
                                </a>
                                </li>
                                <li><a href="genres.html" title="Genres">
						<span className="nav_icon">
							<span className="icon icon_genres"></span>
						</span>
                                    <span className="nav_text">
							genres
						</span>
                                </a>
                                </li>
                                <li><a href="top_track.html" title="Top Tracks">
						<span className="nav_icon">
							<span className="icon icon_tracks"></span>
						</span>
                                    <span className="nav_text">
							top tracks
						</span>
                                </a>
                                </li>
                                <li><a href="free_music.html" title="Free Music">
						<span className="nav_icon">
							<span className="icon icon_music"></span>
						</span>
                                    <span className="nav_text">
							free music
						</span>
                                </a>
                                </li>
                                <li><a href="stations.html" title="Stations">
						<span className="nav_icon">
							<span className="icon icon_station"></span>
						</span>
                                    <span className="nav_text">
							stations
						</span>
                                </a>
                                </li>
                            </ul>
                            <ul className="nav_downloads">
                                <li><a href="download.html" title="Downloads">
						<span className="nav_icon">
							<span className="icon icon_download"></span>
						</span>
                                    <span className="nav_text">
							downloads
						</span>
                                </a>
                                </li>
                                <li><a href="purchase.html" title="Purchased">
						<span className="nav_icon">
							<span className="icon icon_purchased"></span>
						</span>
                                    <span className="nav_text">
							purchased
						</span>
                                </a>
                                </li>
                                <li><a href="favourite.html" title="Favourites">
						<span className="nav_icon">
							<span className="icon icon_favourite"></span>
						</span>
                                    <span className="nav_text">
							favourites
						</span>
                                </a>
                                </li>
                                <li><a href="history.html" title="History">
						<span className="nav_icon">
							<span className="icon icon_history"></span>
						</span>
                                    <span className="nav_text">
							history
						</span>
                                </a>
                                </li>
                            </ul>
                            <ul className="nav_playlist">
                                <li><a href="feature_playlist.html" title="Featured Playlist">
						<span className="nav_icon">
							<span className="icon icon_fe_playlist"></span>
						</span>
                                    <span className="nav_text">
							featured playlist
						</span>
                                </a>
                                </li>
                                <li><a href="add_playlist.html" title="Create Playlist">
						<span className="nav_icon">
							<span className="icon icon_c_playlist"></span>
						</span>
                                    <span className="nav_text">
							create playlist
						</span>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="mCSB_1_scrollbar_vertical"
                         className="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal mCSB_scrollTools_vertical">
                        <div className="mCSB_draggerContainer">
                            <div id="mCSB_1_dragger_vertical" className="mCSB_dragger">
                                <div className="mCSB_dragger_bar"/>
                            </div>
                            <div className="mCSB_draggerRail"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

LeftMenu.propTypes = {};

export default LeftMenu;
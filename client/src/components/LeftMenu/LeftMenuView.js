import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {routes} from "../../routes";

import logo from '../../assets/images/logo.png'
import logoOpen from '../../assets/images/open_logo.png'

import './LeftMenu.scss';

const LeftMenuView = ({toggleLeftMenu, fullLeftMenu}) => {
    return (
        <div className={`ms_sidemenu_wrapper ${fullLeftMenu ? 'open_menu' : ''}`}>
            <div
                className="ms_nav_close"
                onClick={toggleLeftMenu}
            >
                <i className="fa fa-angle-right" aria-hidden="true"/>
            </div>
            <div className="ms_sidemenu_inner">
                <div className="ms_logo_inner">
                    <div className="ms_logo">
                        <Link to={routes.home}>
                            <img src={logo} alt="logo" className="img-fluid"/>
                        </Link>
                    </div>
                    <div className="ms_logo_open">
                        <Link to={routes.home}>
                            <img src={logoOpen} alt="logo" className="img-fluid"/>
                        </Link>
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

                                <li>
                                    <Link
                                        to={routes.liked}
                                        title={routes.liked}
                                    >
                                        <span className="nav_icon">
                                            <span className="icon icon_favourite" />
                                        </span>
                                        <span className="nav_text">
							                favourites
						                 </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to={routes.upload} title={routes.upload} >
                                        <span className="nav_icon">
                                            <span className="icon icon_c_playlist" />
                                        </span>
                                        <span className="nav_text">
							                create playlist
						                </span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

LeftMenuView.propTypes = {
    toggleLeftMenu: PropTypes.func.isRequired,
};

export default LeftMenuView;
import React from 'react';
// import PropTypes from 'prop-types';
import search from '../../assets/images/svg/search.svg';
import {Link} from 'react-router-dom';
import {routes} from "../../routes";

import './header.scss';

const Header = () => {
    return (
        <div className="ms_header">
            <div className="ms_top_left">
                <div className="ms_top_search">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Music Here.."
                    />
                        <span className="search_icon">
							<img src={search} alt="" />
						</span>
                </div>
            </div>
            <div className="ms_top_right">
                <div className="ms_top_btn">
                    <Link
                        to={routes.register}
                        className="ms_btn reg_btn"
                    >
                        <span>register</span>
                    </Link>
                    <Link
                        to={routes.login}
                        className="ms_btn login_btn"
                    >
                        <span>login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Header.propTypes = {
//
// };

export default Header;
import React from 'react';
import PropTypes from 'prop-types';
import LeftMenuView from './LeftMenuView';

import {connect} from "react-redux";
import {toggleLeftMenu} from '../../modules/app/appActions';

const LeftMenuContainer = ({fullLeftMenu, toggleLeftMenu}) => {


    return (
        <LeftMenuView
            toggleLeftMenu={toggleLeftMenu}
            fullLeftMenu={fullLeftMenu}
        />
    );
};

LeftMenuContainer.propTypes = {
    fullLeftMenu: PropTypes.bool.isRequired,
    toggleLeftMenu: PropTypes.func.isRequired,
};

export default connect(state => ({
    fullLeftMenu: state.app.fullLeftMenu
}), {toggleLeftMenu})(LeftMenuContainer);
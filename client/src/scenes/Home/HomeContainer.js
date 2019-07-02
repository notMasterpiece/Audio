import React from 'react';
import PropTypes from 'prop-types';
import HomeView from './HomeView';

import {connect} from 'react-redux';

const HomeContainer = ({player}) => {


    return (
            <HomeView
                player={player}
            />
    );
};

HomeContainer.propTypes = {
    player: PropTypes.object,
};

export default connect(state => ({
    player: state.player,
}))(HomeContainer);
import React from 'react';
import PropTypes from 'prop-types';
import RecentlyPlayed from "../../components/RecentlyPlayed/RecentlyPlayed";

const HomeView = ({player}) => {
    return (
            <RecentlyPlayed
                player={player}
            />
    );
};

HomeView.propTypes = {
    player: PropTypes.object,
};

export default HomeView;
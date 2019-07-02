import React from 'react';
import PropTypes from 'prop-types';
import RecentlyPlayed from "../../components/RecentlyPlayed/RecentlyPlayed";

const HomeView = ({audioList}) => {
    return (
        <div>

            <RecentlyPlayed
                audioList={audioList}
            />
        </div>
    );
};

HomeView.propTypes = {
    audioList: PropTypes.array,
};

export default HomeView;
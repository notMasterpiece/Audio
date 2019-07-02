import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import HomeView from './HomeView';

import {connect} from 'react-redux';

const HomeContainer = ({audioList}) => {


    return (
            <HomeView
                audioList={audioList}
            />
    );
};

HomeContainer.propTypes = {

};

export default connect(state => ({
    audioList: state.audio.audioList,
    currentAudio: state.audio.currentAudio
}))(HomeContainer);
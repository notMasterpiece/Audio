import {handleActions} from '@letapp/redux-actions';
import * as actions from './audioAction';



const audioList = [
    {
        id: 0,
        title: 'Zacepula 3:39',
        image: 'https://lh3.googleusercontent.com/gv-98d5PoGUZCLnKpOaFzHha0HmRKG34LQlHiNcl_XiH1QQRLxdAMMS1-RQI_9SGECguq8et=w544-h544-l90-rj',
        url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561499590/artur_pirozhkov_-_zacepila__zf.fm.mp3'
    },
    {
        id: 1,
        title: 'Deep_House_Sessions_Music (1:01:46)',
        image: 'https://yt3.ggpht.com/t5O8NtDpD8pURKeenAPoK6oj3zYJq0LzWHrLXHa8zWBXwFG2I98rmUCuP6ZwG7rDE4kQtAxagQo=s576',
        url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561551649/MEGA_HITS_2019_Summer_Special_DG_Mix_2019_Best_Of_Deep_House_Sessions_Music_Chill_Out_Mix.mp3'
    },
    {
        id: 4,
        title: 'Chill_Out_MixBest_Summer_Hits (57:46)',
        image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
        url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561739805/audio/Best_Of_Tropical_amp_Deep_House_Music_2018_Chill_Out_MixBest_Summer_Hits.mp3'
    },

];


const INITIAL_STATE = {
    audioList,
    currentAudio: 0,
    isLoading: false,
    isError: false,
    error: null
};


export default handleActions({
    [actions.setCurrentAudio] : (state, action) => {
        return (
            ({
                ...state,
                currentAudio: action.payload,
                isLoading: true,
                isError: false,
                error: null
            })
        )
    },
    [actions.playNextAudio] : (state, action) => {

        const nextCurrentAudio = state.currentAudio + 1;

        return (
            ({
                ...state,
                currentAudio: nextCurrentAudio
            })
        )
    },
}, INITIAL_STATE);

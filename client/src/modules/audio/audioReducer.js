import {handleActions} from '@letapp/redux-actions';
import * as actions from './audioAction';



const audioList = [
    {
        id: 0,
        title: 'Summer_Mix_2019_Best_Of_Deep_House 1:00:00',
        image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
        url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1562068843/audio/MEGA_HITS_2019_Summer_Mix_2019_Best_Of_Deep_House_Sessions_Music_Chill_Out_Mix_17.mp3'
    },
    {
        id: 10,
        title: 'Лучшая Музыка Июль 2019 1:00:00',
        image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
        url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1562050702/audio/%D0%9B%D1%83%D1%87%D1%88%D0%B0%D1%8F_%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0_%D0%98%D1%8E%D0%BB%D1%8C_2019_%D0%97%D0%B0%D1%80%D1%83%D0%B1%D0%B5%D0%B6%D0%BD%D1%8B%D0%B5_%D0%BF%D0%B5%D1%81%D0%BD%D0%B8_%D0%A5%D0%B8%D1%82%D1%8B_%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5_%D0%9F%D0%B5%D1%81%D0%BD%D0%B8_%D0%A1%D0%BB%D1%83%D1%88%D0%B0%D1%82%D1%8C_%D0%91%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE_2019.mp3'
    },
    {
        id: 20,
        title: 'Лучшая Музыка Июль 2019 1:12:52',
        image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
        url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1562051015/audio/Лучшая_Музыка_Июль_2019_Зарубежные_песни_Хиты_Популярные_Песни_Слушать_Бесплатно_2019_1.mp3'
    },
    {
        id: 30,
        title: 'Zacepula 3:39',
        image: 'https://lh3.googleusercontent.com/gv-98d5PoGUZCLnKpOaFzHha0HmRKG34LQlHiNcl_XiH1QQRLxdAMMS1-RQI_9SGECguq8et=w544-h544-l90-rj',
        url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561499590/artur_pirozhkov_-_zacepila__zf.fm.mp3'
    },
    {
        id: 40,
        title: 'Deep_House_Sessions_Music (1:01:46)',
        image: 'https://yt3.ggpht.com/t5O8NtDpD8pURKeenAPoK6oj3zYJq0LzWHrLXHa8zWBXwFG2I98rmUCuP6ZwG7rDE4kQtAxagQo=s576',
        url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561551649/MEGA_HITS_2019_Summer_Special_DG_Mix_2019_Best_Of_Deep_House_Sessions_Music_Chill_Out_Mix.mp3'
    },
    {
        id: 50,
        title: 'Chill_Out_MixBest_Summer_Hits (57:46)',
        image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
        url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561739805/audio/Best_Of_Tropical_amp_Deep_House_Music_2018_Chill_Out_MixBest_Summer_Hits.mp3'
    },

];


const INITIAL_STATE = {
    audioList,
    audioId: 0,
    isPlaying: false,
    isLoading: false,
    isError: false,
    error: null
};


export default handleActions({

    [actions.setCurrentAudio] : (state, action) => {
        return (
            ({
                ...state,
                audioId: action.payload
            })
        )
    },
    [actions.playNextAudio] : state => ({
        ...state,
    }),
    [actions.playAudio] : state => ({
        ...state,
        isPlaying: true
    }),

    [actions.pauseAudio] : state => ({
        ...state,
        isPlaying: false
    }),
}, INITIAL_STATE);

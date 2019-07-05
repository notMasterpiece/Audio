import {handleActions} from '@letapp/redux-actions';
import * as actions from './audioAction';



const playerLists = [
    {
        id: 13434,
        name: 'Playlist №1',
        audioList: [
            {
                id: 30342433434,
                title: 'Zacepula 3:39',
                image: 'https://lh3.googleusercontent.com/gv-98d5PoGUZCLnKpOaFzHha0HmRKG34LQlHiNcl_XiH1QQRLxdAMMS1-RQI_9SGECguq8et=w544-h544-l90-rj',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561499590/artur_pirozhkov_-_zacepila__zf.fm.mp3'
            },
            {
                id: 434367546879,
                title: 'Deep_House_Sessions_Music (1:01:46)',
                image: 'https://yt3.ggpht.com/t5O8NtDpD8pURKeenAPoK6oj3zYJq0LzWHrLXHa8zWBXwFG2I98rmUCuP6ZwG7rDE4kQtAxagQo=s576',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561551649/MEGA_HITS_2019_Summer_Special_DG_Mix_2019_Best_Of_Deep_House_Sessions_Music_Chill_Out_Mix.mp3'
            },
            {
                id: 50787879780980,
                title: 'Chill_Out_MixBest_Summer_Hits (57:46)',
                image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561739805/audio/Best_Of_Tropical_amp_Deep_House_Music_2018_Chill_Out_MixBest_Summer_Hits.mp3'
            },
            {
                id: 4121212,
                title: 'Summer_Mix_2019_Best_Of_Deep_House 1:00:00',
                image: 'https://lh3.googleusercontent.com/T3x2pU8D34XtohYNjgYNihSSmozUny1eKUooZp7N06gIfp3FEgBxtER-0H0sl4tAulh_GCjH9MEStF7i4w=w544-h544-l90-rj',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1562068843/audio/MEGA_HITS_2019_Summer_Mix_2019_Best_Of_Deep_House_Sessions_Music_Chill_Out_Mix_17.mp3'
            },
            {
                id: 1067,
                title: 'Лучшая Музыка Июль 2019 1:00:00',
                image: 'https://lh3.googleusercontent.com/AruwUWeJsesWkYHehzJNkXKgfAKbXE7_L6LLQPGuZcm1m7xOoPmeiFw0pBE6Wm4Df9aZFK80C8p-pLcgMQ=w544-h544-l90-rj',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1562050702/audio/%D0%9B%D1%83%D1%87%D1%88%D0%B0%D1%8F_%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0_%D0%98%D1%8E%D0%BB%D1%8C_2019_%D0%97%D0%B0%D1%80%D1%83%D0%B1%D0%B5%D0%B6%D0%BD%D1%8B%D0%B5_%D0%BF%D0%B5%D1%81%D0%BD%D0%B8_%D0%A5%D0%B8%D1%82%D1%8B_%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5_%D0%9F%D0%B5%D1%81%D0%BD%D0%B8_%D0%A1%D0%BB%D1%83%D1%88%D0%B0%D1%82%D1%8C_%D0%91%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE_2019.mp3'
            }
        ]
    },


    {
        id: 2,
        name: 'Playlist №145',
        audioList: [
            {
                id: 202,
                title: 'Лучшая Музыка Июль 2019 1:12:52',
                image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1562051015/audio/Лучшая_Музыка_Июль_2019_Зарубежные_песни_Хиты_Популярные_Песни_Слушать_Бесплатно_2019_1.mp3'
            },
            {
                id: 302,
                title: 'Zacepula 3:39',
                image: 'https://lh3.googleusercontent.com/gv-98d5PoGUZCLnKpOaFzHha0HmRKG34LQlHiNcl_XiH1QQRLxdAMMS1-RQI_9SGECguq8et=w544-h544-l90-rj',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561499590/artur_pirozhkov_-_zacepila__zf.fm.mp3'
            },
            {
                id: 402,
                title: 'Deep_House_Sessions_Music (1:01:46)',
                image: 'https://yt3.ggpht.com/t5O8NtDpD8pURKeenAPoK6oj3zYJq0LzWHrLXHa8zWBXwFG2I98rmUCuP6ZwG7rDE4kQtAxagQo=s576',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561551649/MEGA_HITS_2019_Summer_Special_DG_Mix_2019_Best_Of_Deep_House_Sessions_Music_Chill_Out_Mix.mp3'
            },
            {
                id: 502,
                title: 'Chill_Out_MixBest_Summer_Hits (57:46)',
                image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1561739805/audio/Best_Of_Tropical_amp_Deep_House_Music_2018_Chill_Out_MixBest_Summer_Hits.mp3'
            },
        ]
    },


    {
        id: 3,
        name: 'Summer Musik',
        audioList: [
            {
                id: 1212103,
                title: 'Summer_Mix_2019_Best_Of_Deep_House 1:00:00',
                image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1562068843/audio/MEGA_HITS_2019_Summer_Mix_2019_Best_Of_Deep_House_Sessions_Music_Chill_Out_Mix_17.mp3'
            },
            {
                id: 103,
                title: 'Лучшая Музыка Июль 2019 1:00:00',
                image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1562050702/audio/%D0%9B%D1%83%D1%87%D1%88%D0%B0%D1%8F_%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0_%D0%98%D1%8E%D0%BB%D1%8C_2019_%D0%97%D0%B0%D1%80%D1%83%D0%B1%D0%B5%D0%B6%D0%BD%D1%8B%D0%B5_%D0%BF%D0%B5%D1%81%D0%BD%D0%B8_%D0%A5%D0%B8%D1%82%D1%8B_%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5_%D0%9F%D0%B5%D1%81%D0%BD%D0%B8_%D0%A1%D0%BB%D1%83%D1%88%D0%B0%D1%82%D1%8C_%D0%91%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE_2019.mp3'
            },
            {
                id: 203,
                title: 'Лучшая Музыка Июль 2019 1:12:52',
                image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1562051015/audio/Лучшая_Музыка_Июль_2019_Зарубежные_песни_Хиты_Популярные_Песни_Слушать_Бесплатно_2019_1.mp3'
            }

        ]
    },


    {
        id: 4,
        name: 'Summer Musik 2020',
        audioList: [
            {
                id: 12121034,
                title: 'Summer_Mix_2019_Best_Of_Deep_House 1:00:00',
                image: 'https://lh3.googleusercontent.com/dbpP09Az15spCJMIsb-mDtqHxjhteRGcb2YRtYFCWb3CkJQCKvCDr90LUaTxhNiCIiDrRusN2g=w544-h544-l90-rj',
                url: 'https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1562068843/audio/MEGA_HITS_2019_Summer_Mix_2019_Best_Of_Deep_House_Sessions_Music_Chill_Out_Mix_17.mp3'
            },
        ]
    }


];


const INITIAL_STATE = {
    playerLists,
    audioId: 30342433434,
    currentPlaylistId: 13434,
    volume: 64,
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


    [actions.playNextAudio] : state => {

        let nextItem;
        const currentPlayList = state.playerLists.filter(list => list.id === state.currentPlaylistId)[0];
        const prevIndex = currentPlayList.audioList.findIndex(audio => audio.id === state.audioId);


        if ( prevIndex < currentPlayList.audioList.length - 1) {
            nextItem = currentPlayList.audioList[prevIndex + 1];
        }

        if (prevIndex === currentPlayList.audioList.length - 1) {
            nextItem = currentPlayList.audioList[0];
        }

        console.log(nextItem);

        return ({
          ...state,
          audioId: nextItem.id,
          isLoading: true,

      })

    },

    [actions.playPrevAudio] : state => {

        let prevItem;
        const currentPlayList = state.playerLists.filter(list => list.id === state.currentPlaylistId)[0];
        const prevIndex = currentPlayList.audioList.findIndex(audio => audio.id === state.audioId);

        if (prevIndex <= currentPlayList.audioList.length - 1) {
            prevItem = currentPlayList.audioList[prevIndex - 1];
        }

        if (prevIndex === 0) {
            prevItem = currentPlayList.audioList[currentPlayList.audioList.length - 1];
        }

        return ({
          ...state,
          audioId: prevItem.id,

      })
    },


    [actions.playAudioById] : (state, action) => ({
        ...state,
        isPlaying: true,
        isLoading: true,
        audioId: action.payload.id,
        currentPlaylistId: action.payload.listId
    }),

    [actions.playAudio] : state => ({
        ...state,
        isPlaying: true
    }),

    [actions.pauseAudio] : state => {
        return ({
            ...state,
            isPlaying: false
        })
    },

    [actions.audioLoaded] : state => ({
        ...state,
        isLoading: false
    }),

    [actions.changeVolume] : (state, action) => ({
        ...state,
        volume: action.payload
    }),


}, INITIAL_STATE);

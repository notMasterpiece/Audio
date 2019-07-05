import { createAction } from '@letapp/redux-actions';

export const setCurrentAudio = createAction('audio/SET_CURRENT_AUDIO');
export const playAudioById = createAction('audio/PLAY_AUDIO_BY_ID');
export const playAudio = createAction('audio/PLAY_AUDIO');
export const pauseAudioById = createAction('audio/PAUSE_AUDIO_BY_ID');
export const pauseAudio = createAction('audio/PAUSE_AUDIO');
export const playNextAudio = createAction('audio/PLAY_NEXT_AUDIO');
export const playPrevAudio = createAction('audio/PLAY_PREV_AUDIO');
export const audioLoaded = createAction('audio/AUDIO_LOADED');
export const changeVolume = createAction('audio/AUDIO_CHANGE_VOLUME');

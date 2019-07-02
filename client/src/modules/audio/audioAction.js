import { createAction } from '@letapp/redux-actions';

export const setCurrentAudio = createAction('audio/SET_CURRENT_AUDIO');
export const playAudio = createAction('audio/PLAY_AUDIO');
export const pauseAudio = createAction('audio/PAUSE_AUDIO');
export const playNextAudio = createAction('audio/PLAY_NEXT_AUDIO');

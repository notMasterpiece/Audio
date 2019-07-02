import { createAsyncActions, createAction } from '@letapp/redux-actions';

export const initialization = createAsyncActions('app/INITIALIZATION');
export const toggleLeftMenu = createAction('app/TOGGLE_LEFT_MENU');
export const togglePlayPanel = createAction('app/TOGGLE_PLAY_PANEL');
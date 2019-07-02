import * as actions from './appActions';
// import Api from '../../api/api';
// import {fetchViewer} from '../viewer/viewerOperations';

export const init = () => async dispatch => {
    try {
        dispatch(actions.initialization.start());
        // Api.init();
        // await dispatch(fetchViewer());
        dispatch(actions.initialization.success());
    } catch (err) {
        dispatch(actions.initialization.error());
    }
};
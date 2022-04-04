import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import profileReducer from './profile/Profile';
import rocketsReducer from './rockets/Rockets';
import missionsReducer from './missions/Missions';

const rootReducer = combineReducers({
  profile: profileReducer,
  rockets: rocketsReducer,
  missions: missionsReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

export default store;

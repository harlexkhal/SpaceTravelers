import {
  combineReducers,
  compose,
  applyMiddleware, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
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
    applyMiddleware(thunk, logger),
  ),
);
/* eslint-enable */

export default store;

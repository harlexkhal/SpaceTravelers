import {
  combineReducers,
  applyMiddleware,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;

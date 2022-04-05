import GetMissionsFromApi from '../api/Missions';

const GET_MISSIONS_REQUEST =
  'SPACE-TRAVELERS/missions/GET_REQUEST';
const GET_MISSIONS_SUCCESS =
  'SPACE-TRAVELERS/missions/GET_SUCCESS';
const GET_MISSIONS_FAILURE =
  'SPACE-TRAVELERS/missions/GET_FAILURE';

const initialState = {
  loading: false,
  missionsList: [],
  error: '',
};

export function getMissionsRequest() {
  return {
    type: GET_MISSIONS_REQUEST,
  };
}

export function getMissionsSuccess(missionsList) {
  return {
    type: GET_MISSIONS_SUCCESS,
    payload: missionsList,
  };
}

export function getMissionsFailure(error) {
  return {
    type: GET_MISSIONS_FAILURE,
    payload: error,
  };
}

export function getMissions() {
  return (dispatch) => {
    dispatch(getMissionsRequest());
    GetMissionsFromApi()
      .then((data) => {
        dispatch(getMissionsSuccess(data));
      })
      .catch((error) => {
        dispatch(getMissionsFailure(error.message));
      });
  };
}

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_REQUEST:
      return { ...state, loading: true };

    case GET_MISSIONS_SUCCESS:
      return {
        loading: false,
        missionsList: action.payload,
        error: '',
      };

    case GET_MISSIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default missionsReducer;

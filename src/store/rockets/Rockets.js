import { fetchRockets } from "../api/Rockets";

const FETCH_SUCCESS = 'rockets/store/FETCH_SUCCESSFUL';
const FETCH_FAILED = 'rockets/store/FETCH_FAILED';

export const fetchAllRockets = () => (dispatch) => {
  fetchRockets().then((response) => {
    if (response.status === 200 && response.ok) {
      response.json().then((data) => {
        let rocketdata = [];
        data.forEach((rocket) => {
          rocketdata.push({
            id: rocket.rocket_id,
            name: rocket.rocket_name,
            description: rocket.description,
          });
        });
        dispatch(
          {
            type: FETCH_SUCCESS,
            data: rocketdata,
          },
        );
      });
    } else {
      dispatch(
        {
          type: FETCH_FAILED,
          data: [],
        },
      );
    }
  });
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.data;
    default:
      return state;
  }
};

export default rocketsReducer;

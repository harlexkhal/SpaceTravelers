import { fetchRockets } from "../api/Rockets";

const FETCH_SUCCESS = 'rockets/store/FETCH_SUCCESSFUL';
const FETCH_FAILED = 'rockets/store/FETCH_FAILED';
const CHANGE_RESERVATION = 'rockets/store/CHANGE_RESERVATION'

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
            imgUrl: rocket.flickr_images[0],
            reservation: false
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

export const changeState = (id) => ({
  type: CHANGE_RESERVATION,
  id,
});

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.data;

    case CHANGE_RESERVATION:
      const newState = state.map((rocket) => {
        rocket.reservation = rocket.id === action.id ? !rocket.reservation : rocket.reservation;
        return rocket;
      });
      return newState;
      
    default:
      return state;
  }
};

export default rocketsReducer;

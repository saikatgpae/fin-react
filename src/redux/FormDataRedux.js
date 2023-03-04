import axios from 'axios';

const GET_SPORTS_DATA = 'GET_CAR_DATA';
const GET_OLYMPIC_DATA = 'GET_OLYMPIC_DATA';

const sportsAPI = 'https://www.ag-grid.com/example-assets/wide-spread-of-sports.json';
const olympicAPI = 'https://www.ag-grid.com/example-assets/olympic-winners.json';

const fetchCarData = () => (dispatch) => {
  axios.get(sportsAPI).then((res) => {
    const sportsData = res.data;
    dispatch({
      type: GET_SPORTS_DATA,
      sportsData,
    });
  });
};

const fetchOlymicData = () => (dispatch) => {
  axios.get(olympicAPI).then((res) => {
    const olympicData = res.data;
    dispatch({
      type: GET_OLYMPIC_DATA,
      olympicData,
    });
  });
};

const formDataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SPORTS_DATA:
      return [
        ...action.sportsData,
      ];
    case GET_OLYMPIC_DATA:
      return [
        ...action.olympicData,
      ];
    default:
      return state;
  }
};

export default fetchCarData;
export {
  formDataReducer, fetchOlymicData,
};

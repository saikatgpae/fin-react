import axios from 'axios';

const GET_CAR_DATA = 'GET_CAR_DATA';
const GET_OLYMPIC_DATA = 'GET_OLYMPIC_DATA';

const carAPI = 'https://www.ag-grid.com/example-assets/row-data.json';
const olympicAPI = 'https://www.ag-grid.com/example-assets/olympic-winners.json';

const fetchCarData = () => (dispatch) => {
  axios.get(carAPI).then((res) => {
    const carData = res.data;
    dispatch({
      type: GET_CAR_DATA,
      carData,
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
    case GET_CAR_DATA:
      return [
        ...action.carData,
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

import axios from 'axios';

const GET_CAR_DATA = 'GET_CAR_DATA';
const GET_OLYMPIC_DATA = 'GET_OLYMPIC_DATA';

const car_API = 'https://www.ag-grid.com/example-assets/row-data.json';
const olympic_API = 'https://www.ag-grid.com/example-assets/olympic-winners.json';

const fetchCarData = () => (dispatch) => {
    axios.get(car_API).then((res) => {
      const car_data = res.data;
      dispatch({
        type: GET_CAR_DATA,
        car_data,
      });
    });
  };

  const fetchOlymicData = () => (dispatch) => {
    axios.get(olympic_API).then((res) => {
      const olympic_data = res.data;
      dispatch({
        type: GET_OLYMPIC_DATA,
        olympic_data,
      });
    });
  };

// const initialState = [{Nmae: "Saikat"}];

const formDataReducer = (state=[], action) => {
  switch (action.type) {
        case GET_CAR_DATA:
        return [
            ...action.car_data,
        ];
        case GET_OLYMPIC_DATA:
        return [
            ...action.olympic_data,
        ];
        default:
        return state;
    }
};

export default fetchCarData;
export {
    formDataReducer, fetchOlymicData,
};

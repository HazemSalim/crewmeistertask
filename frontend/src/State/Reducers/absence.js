import { GET_ABSENCE, SET_ERROR, SET_LOADING } from "../Types";

let initialState = {
  absences: [],
  total: 0,
  isloading: true,
  error: false,
};

const absenceReducer = function (state = initialState, action) {

  switch (action.type) {
    case GET_ABSENCE:
      return {
        ...state,
        absences: action.payload,
        total: action.payload.length,
        isloading: false,
        error: false,
      };
    case SET_LOADING:
      return { ...state, isloading: true };
    case SET_ERROR:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export default absenceReducer;

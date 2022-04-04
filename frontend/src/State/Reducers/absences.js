import { GET_ABSENCE, SET_ERROR, SET_LOADING } from "../types";

let initialState = {
  absences: [],
  total: 0,
  loading: true,
  error: false,
};

const absencesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_ABSENCE:
      return {
        ...state,
        absences: action.payload.payload,
        total: action.payload.total,
        loading: false,
        error: false,
      };
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default absencesReducer;

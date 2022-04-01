import { GET_ABSENCE, SET_ERROR, SET_LOADING } from "../Types";
import { getAbsencesAPI, downloadIcalFileAPI } from "../Api/absence";

import store from "../store";

const { dispatch } = store;

export function getAbsencesData() {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });

  getAbsencesAPI()
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: GET_ABSENCE,
        payload: res,
      });

      return res;
    })
    .catch((err) => {
      dispatch({
        type: SET_ERROR,
        payload: false,
      });
      return err;
    });
}

export function downloadIcalFile(file) {
    downloadIcalFileAPI(file)
    .then((res) => res.blob())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

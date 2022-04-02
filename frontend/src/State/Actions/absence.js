import { GET_ABSENCE, SET_ERROR, SET_LOADING } from "../Types";
import { getAbsencesAPI, downloadIcalFileAPI } from "../Api/absence";

import store from "../store";

const { dispatch } = store;

export async function getAbsencesData() {
  // dispatch({
  //   type: SET_LOADING,
  //   payload: true,
  // });

  try {
    const data = await getAbsencesAPI();

    const res = await data.json();

    dispatch({
      type: GET_ABSENCE,
      payload: res.data,
    });
    return res;
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err,
    });
    return err;
  }
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

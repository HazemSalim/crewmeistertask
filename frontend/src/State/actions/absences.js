import { GET_ABSENCE, SET_ERROR, SET_LOADING } from "../types";
import store from "../store";
import { getAbsencesAPI, downloadIcalFileAPI } from "../apis/absences";

const { dispatch } = store;

export async function getAbsencesData(filter) {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });

  try {
    const data = await getAbsencesAPI(filter);

    const res = await data.json();

    dispatch({
      type: GET_ABSENCE,
      payload: { payload: res.data, total: res.total },
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

export async function downloadIcalFile(file) {
  try {
    const res = await downloadIcalFileAPI(file);
    return await res.blob();
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err,
    });
    return err;
  }
}

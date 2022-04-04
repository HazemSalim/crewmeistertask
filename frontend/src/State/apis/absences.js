import { API_URL } from "../../utils/constants";

export function getAbsencesAPI(filter) {
  let filters = Object.keys(filter).map((item) => {
    return `${item}=${filter[item]}`;
  });

  return fetch(`${API_URL}/absence/get-absences?${filters.join("&")}`);
}

export function downloadIcalFileAPI(id) {
  return fetch(`${API_URL}/ical/${id}`);
}

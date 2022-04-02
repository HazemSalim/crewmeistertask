 
import {API_URL} from '../../Utilities/config';

export const getAbsencesAPI  = ()=>{
   
    return fetch(`${API_URL}/absence/get-absences`);
}

export const downloadIcalFileAPI   = ()=>{
    return null;
}

 
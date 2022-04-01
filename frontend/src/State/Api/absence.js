 
const API_URL = 'http://localhost:5000'

export const getAbsencesAPI  = ()=>{
   
    return fetch(`${API_URL}/absence/get-absences`);

    
}

export const downloadIcalFileAPI   = ()=>{
    return null;
}

 
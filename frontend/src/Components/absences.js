import React, { useEffect } from "react";
import { useSelector} from "react-redux";
import { getAbsencesData } from "../State/Actions/absence";

function Absences() {
 
  const { absences, total, isloading, error } = useSelector(
    (state) => state.absences
  );

  useEffect(() => {
    const fetchData = async () => {
      getAbsencesData();
    };

    fetchData();
  }, []);

  return <div>Hello Crewmeister {total}</div>;
}

export default Absences;

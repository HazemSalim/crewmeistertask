import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAbsencesData } from "../State/Actions/absence";
import FilterForm from "../Components/FilterForm";
import Spinner from "../Components/Spinner";
import { toast } from "react-toastify";

function Dashboard() {
  const { absences, total, isloading, error } = useSelector(
    (state) => state.absences
  );

  useEffect(() => {
    const fetchData = async () => {
      await getAbsencesData();
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (error) {
      console.log(error);
      toast.error(error);
    }
  }, [error]);

  if (isloading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Crewmeister</h1>
        <p> Absences </p>
      </section>

      <FilterForm />

      <section className="content">
        { total > 0 ? (
          <div className="goals">
            {absences.map((abs) => (
              <span key={abs.id}>{abs.memberDetails.name}</span>
            ))}
          </div>
        ) : (
          <h3>You have no Data for Absence</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;

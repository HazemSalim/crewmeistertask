import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import actions from "../../state/actions";
import TableRow from "../TableRow";
import TableHeader from "../TableHeader";
import Modal from "../Modal";
import AbsenceDetail from "../AbsenceDetail";
import Filters from "../Filters";
import { handleMessage } from "../../handlers";
import { tableHeaders } from "./tableHeaders";
import Paging from "./paging";

const Absences = () => {
  const { absences, total, loading, error } = useSelector(
    (state) => state.absences
  );

  const [state, setState] = useState({
    limit: 10,
    page: 1,
    status: "",
    startDate: null,
    endDate: null,
    showModal: false,
    selectedAbsence: null,
  });

  const fetchData = async () => {
    const { limit, page, status } = state;

    await actions.getAbsencesData({
      limit,
      page,
      status,
      startDate: state.startDate ? state.startDate.getTime() : "",
      endDate: state.endDate ? state.endDate.getTime() : "",
    });
  };

  useEffect(() => {
    fetchData();
  }, [state.page]);

  const toggleModal = (showModal, selectedAbsence) => {
    setState({
      ...state,
      showModal,
      selectedAbsence,
    });
  };

  const changeStatus = (status) => {
    setState({
      ...state,
      status,
    });
  };

  const changeDates = (startDate, endDate) => {
    setState({
      ...state,
      startDate,
      endDate,
    });
  };

  const handlePagination = (selected) => {
    setState({
      ...state,
      page: selected + 1,
    });
  };

  const handleSearchFn = () => {
    setState({
      ...state,
      page: 1,
    });

    fetchData();
  };

  const downloadFile = (id) => {
    actions.downloadIcalFile(id).then((res) => {
      const href = window.URL.createObjectURL(res);
      const a = document.createElement("a");
      a.download = "event.ics";
      a.href = href;
      a.click();
      a.href = "";
    });
  };

  return (
    <Row data-testid="absences">
      <Col xs={12} lg={12}>
        <Filters
          total={total}
          changeStatus={changeStatus}
          changeDates={changeDates}
          handleSearchFn={handleSearchFn}
        />
        <Row>
          <Col xs={12} lg={12} className="table-responsive">
            <Table>
              <thead>
                <TableHeader data={tableHeaders} />
              </thead>
              <tbody>
                {absences && absences.length ? (
                  absences.map((absence, key) => (
                    <TableRow
                      key={absence.id}
                      index={(state.page - 1) * state.limit + (key + 1)}
                      {...absence}
                      toggleModal={() => toggleModal(true, absence)}
                      downloadFile={() => downloadFile(absence.id)}
                    />
                  ))
                ) : (
                  <TableRow
                    noData
                    text={handleMessage(
                      loading,
                      error,
                      !absences || !absences.length
                    )}
                  />
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
        {absences && total > 10 && (
          <Row>
            <Col xs={12} lg={12}>
              <Paging total={total} handlePagination={handlePagination} />
            </Col>
          </Row>
        )}
      </Col>
      <Modal
        showModal={state.showModal}
        toggleModal={toggleModal}
        title="Details of absence"
      >
        <AbsenceDetail {...state.selectedAbsence} />
      </Modal>
    </Row>
  );
};

export default Absences;

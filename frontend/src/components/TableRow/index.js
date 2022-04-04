import React from "react";
import moment from "moment";
import List from "../styled/List";
import ActionButton from "../styled/ActionButton";

import { trimText, getNumberOfDays } from "../../handlers";

const TableRow = ({
  _id,
  index,
  type,
  memberNote,
  noData,
  text,
  memberDetails = {},
  admitterNote,
  status,
  toggleModal,
  startDate,
  endDate,
  downloadFile,
}) => {
  const { name } = memberDetails;
  const start = moment(startDate);
  const end = moment(endDate);
  const days = getNumberOfDays(start, end);

  const typeSpan = (
    <span
      style={{
        color: type === "sickness" ? "red" : "green",
        fontWeight: "bold",
      }}
    >
      {type}
    </span>
  );

  const statusSpan = (
    <span
      style={{
        color:
          status === "Confirmed"
            ? "green"
            : status === "Rejected"
            ? "red"
            : "grey",
        fontWeight: "bold",
      }}
    >
      {status}
    </span>
  );

  return (
    <List data-testid="table-row">
      {noData ? (
        <td colSpan={8} className="text-center">
          {text}
        </td>
      ) : (
        <>
          <td>{index}.</td>
          <td>{name}</td>
          <td>{typeSpan}</td>
          <td>
            {days} {days === 1 ? "day" : "days"}
          </td>
          <td>{memberNote ? trimText(memberNote, 10) : "-"}</td>
          <td>{statusSpan}</td>
          <td>{admitterNote ? trimText(admitterNote, 10) : "-"}</td>
          <td>
            <ActionButton className="mr-3" onClick={toggleModal}>
              Details
            </ActionButton>
            <ActionButton onClick={() => downloadFile(_id)}>
              Download
            </ActionButton>
          </td>
        </>
      )}
    </List>
  );
};

export default TableRow;

import React from "react";

const MyAppointmentRow = (props) => {
    const {a, i} = props
    const {patientName, date, slot, treatment} = a
  return (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{patientName}</td>
      <td>{date}</td>
      <td>{slot}</td>
      <td>{treatment}</td>
    </tr>
  );
};

export default MyAppointmentRow;

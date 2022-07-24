import React from "react";
import { Link } from "react-router-dom";

const MyAppointmentRow = (props) => {
    const {a, i} = props
    const {patientName, date, slot, treatment, price, paid, _id, transactionId} = a
  return (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{patientName}</td>
      <td>{date}</td>
      <td>{slot}</td>
      <td>{treatment}</td>
      <td>
        {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-success btn-xs'>pay</button></Link>}
        {(price && paid) && <div>
          <button className='btn btn-xs'>Paid</button>
          <p>{transactionId}</p>  
        </div>}
      </td>
    </tr>
  );
};

export default MyAppointmentRow;

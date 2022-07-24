import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutFrom";

const Payment = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: appointment,
  } = useQuery(["service", id], () =>
    fetch(`https://doctors-portal-server-2nd-time.herokuapp.com/booking/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const {date, treatment, price, slot, patientName } = appointment

  const stripePromise = loadStripe('pk_test_51L3yxyGxDf7DYIvzB2dADBrYRLv1V6ynAao5VILfSswUx6XUNts49HImSyLVwIBcx9HPvXz17bEpK5EVFNhIOcYl00TB8aBnAO')
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl my-5">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {patientName}</p>
          <h2 className='cart-title'>Please Pay for {treatment}</h2>
          <p>Your Appointment: <span className='text-orange-700'>{date}</span></p>
          <p>Please pay: ${price}</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

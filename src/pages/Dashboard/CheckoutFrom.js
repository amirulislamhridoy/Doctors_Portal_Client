import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ appointment }) => {
  const { _id, price, patient, patientName } = appointment;
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    fetch("https://doctors-portal-server-2nd-time.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // react stripe js
    // if(elements == null){
    //     return;
    // }
    // const {error, paymentMethod} = await stripe.createPaymentMethod({
    //     type: 'card',
    //     card: elements.getElement(CardElement)
    // })
    // react stripe js => example => hooks => 0-Card-Minimal.js
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setPaymentError(error?.message || "");
    setSuccess("");
    // if(error){
    //     // console.log("error", error)
    //     setPaymentError(error?.message)
    // }else{
    //     // console.log('paymentMethod', paymentMethod)
    //     setPaymentError('')
    // }
    // confirm a card payment - stripe js => confirm a paymentIntent by payment method
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (intentError) {
      setPaymentError(intentError.message);
      setTransactionId("");
    } else {
      fetch(`https://doctors-portal-server-2nd-time.herokuapp.com/booking/${_id}`, {
        method: "PATCH",
        body: JSON.stringify({ transactionId: paymentIntent.id }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSuccess("Congrats, your payment is success.");
          setPaymentError("");
          setTransactionId(paymentIntent.id);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#9e2146" },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-sm btn-outline mt-2"
          disable={!stripe || !elements}
        >
          Pay
        </button>
      </form>
      {paymentError && <p className="text-red-400">{paymentError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>
            Your transaction Id:{" "}
            <span className="text-orange-500">{transactionId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;

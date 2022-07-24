import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
const stripePromise = loadStripe('pk_test_51L3yxyGxDf7DYIvzB2dADBrYRLv1V6ynAao5VILfSswUx6XUNts49HImSyLVwIBcx9HPvXz17bEpK5EVFNhIOcYl00TB8aBnAO')
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <Elements stripe={stripePromise}>

        <App />
      </Elements>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

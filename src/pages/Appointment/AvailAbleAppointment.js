import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Service from "./Service";
import ServiceModal from "./ServiceModal";

const AvailAbleAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState({})
  const formatDate = format(date, 'PP')
  const { isLoading, error, data : services, refetch } = useQuery(['available', formatDate], () =>
     fetch(`http://localhost:5000/available?date=${formatDate}`).then(res =>
       res.json()
     )
   )
   
  return (
    <section className='my-20'>
      <p className="text-2xl text-center text-secondary text-semibold">
        Available Services on {format(date, "PP")}
      </p>
      <p className="text-2xl mb-10 text-center text-neutral text-semibold">
        Please select a service
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services?.map((service) => (
          <Service setTreatment={setTreatment} service={service} key={service._id}></Service>
        ))}
      </div>

      {treatment && <ServiceModal refetch={refetch} date={date} treatment={treatment} setTreatment={setTreatment}></ServiceModal>}
    </section>
  );
};

export default AvailAbleAppointment;

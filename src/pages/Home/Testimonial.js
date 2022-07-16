import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: '1',
      description: "It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using OLorem Ipsumis that it has a more-or-less normal distribution of letters, ass opposed to using 'Content here, content",
      img: people1,
      name: 'Winson Herry',
      location: 'California'
    },
    {
      _id: '2',
      description: "It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using OLorem Ipsumis that it has a more-or-less normal distribution of letters, ass opposed to using 'Content here, content",
      img: people2,
      name: 'Winson Herry',
      location: 'California'
    },
    {
      _id: '3',
      description: "It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using OLorem Ipsumis that it has a more-or-less normal distribution of letters, ass opposed to using 'Content here, content",
      img: people3,
      name: 'Winson Herry',
      location: 'California'
    }
  ]
  return (
    <section className="m-5 mt-20">
      <div className="flex justify-between">
        <div>
          <p className="text-xl font-bold text-secondary mt-5">Testimonial</p>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <img className="w-24 lg:w-48" src={quote} alt="" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map(review => <Review review={review} key={review._id}></Review>)}
      </div>
    </section>
  );
};

export default Testimonial;

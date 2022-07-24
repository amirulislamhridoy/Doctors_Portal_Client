import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query'
import { toast } from "react-toastify";
import Loading from '../Loading/Loading'

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const uploadApiKey = "893909661bf063b7b6747914cb9d81f0";

  const { isLoading, error, data: services } = useQuery('services', () =>
     fetch('http://localhost:5000/service').then(res =>
       res.json()
     )
   )

  const onSubmit = async (data) => {
    const photo = data.photo[0];
    const formData = new FormData();
    formData.append("image", photo);

    fetch(
      `https://api.imgbb.com/1/upload??expiration=600&key=${uploadApiKey}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specificity: data.specificity,
            photo: result.data.url,
          };
          fetch('http://localhost:5000/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res =>res.json())
                .then(res =>{
                    if(res.acknowledged){
                        toast.success('The doctor is Added')
                        reset()
                    }else{
                        toast.error('Sorry Doctor not added.')
                    }
                })
        }
      });
  };

  if(isLoading){
    return <Loading />
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-5">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: true })}
            />
            <label className="label text-red-500">
              <span>
                {errors.name?.type === "required" && "Name is required"}
              </span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Email is invalid",
                },
              })}
            />
            <label className="label text-red-500">
              {errors.email?.type === "required" && errors?.email?.message}
              {errors.email?.type === "pattern" && errors?.email?.message}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Specificity</span>
            </label>
            <select
              {...register("specificity")}
              className="border rounded-md border-gray-300 px-1 py-2 mb-3"
            >
              {services?.map(service => <option
                value={service.name}
                key={service._id}
              >{service.name}</option>)}
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("photo", {
                required: "Photo is required",
              })}
            />
            <label className="label text-red-500">
              {errors.photo?.type === "required" && errors?.photo?.message}
            </label>
          </div>

          <input
            className="btn btn-outline w-full"
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;

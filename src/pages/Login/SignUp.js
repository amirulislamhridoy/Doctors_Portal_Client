import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import useToken from "../Hooks/useToken";
import Loading from "../Loading/Loading";

const SignUp = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser)

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({displayName: data.name})
  };
  if(loading || gLoading){
    return <Loading></Loading>
  }
  if(token){
    navigate('/')
  }
  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-64px)]">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mx-auto">Sign Up</h2>

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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Your password must be 6 length",
                  },
                })}
              />
              <label className="label text-red-500">
                {errors.password?.type === "required" &&
                  errors?.password?.message}
                {errors.password?.type === "minLength" &&
                  errors?.password?.message}
              </label>
            </div>

            <input
              className="btn btn-outline w-full"
              type="submit"
              value="Sign Up"
            />
          </form>

          <p>
          Already have an account?{" "}
            <Link to="/login" className="text-green-500">
               Please Login
            </Link>
          </p>

          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline"> Continue With Google</button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

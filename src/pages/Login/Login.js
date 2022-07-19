import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import useToken from '../Hooks/useToken'

const Login = () => {
  const navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || '/'
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken( user || gUser)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  let errorContent;
  if ( gLoading || loading) {
    return <Loading></Loading>
  }
  if (gError || error) {
    errorContent = (
      <p className="text-red-500">
        <small>{gError?.message || error?.message}</small>
      </p>
    );
  }
  if(token){
    navigate(from, {replace: true})
  }

  return (
    <section className=" min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mx-auto">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
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
              {errors.email?.type === "required" && errors.email.message}
              {errors.email?.type === "pattern" && errors.email.message}
            </label>

            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: { value: true, message: "Password is Required" },
                minLength: { value: 6, message: "Your password must be 6 length" },
              })}
            />
            <label className="label text-red-500">
              {errors.password?.type === "required" && errors.password.message}
              {errors.password?.type === "minLength" && errors.password.message}
            </label>

            {errorContent}
            <input
              type="submit"
              value="Login"
              className="btn bg-accent text-white w-full"
            />
          </form>

          <p>
            New to Doctors Portal?{" "}
            <Link to="/signup" className="text-green-500">
              Create new account
            </Link>
          </p>

          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">
          Continue With Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;

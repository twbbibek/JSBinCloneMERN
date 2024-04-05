import { Link, useNavigate } from "react-router-dom";
import PageFooter from "../components/PageFooter";
import PageHeader from "../components/PageHeader";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [error, setError] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/signup", {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        console.log("signup seccesfull");
        navigate('/login')
        //toast('Login Successful')
      })
      .catch((err) => {
        setError(err.response.data.msg);
        //toast.error(err.response.data.msg);
        console.log(err)
      });
  };
  return (
    <>
      <PageHeader />
      <section>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div class="flex justify-around sm:mx-auto sm:w-full sm:max-w-sm">
            <Link className="border border-black  border-b-0  w-full text-center">
              <p className="text-xs text-[#B8B8B8] w-full">New to Bin</p>
              <h2 class=" text-center leading-9 tracking-tight text-gray-900">
                Register
              </h2>
            </Link>
            <Link
              to="/login"
              className="border border-black border-l-0 border-t-0 border-r-0 w-full text-center"
            >
              <p className="text-xs text-[#B8B8B8]">Existing User</p>
              <h2 class=" text-center leading-9 tracking-tight text-gray-900">
                Login
              </h2>
            </Link>
          </div>

          {/* {error && (
            <div class="sm:mx-auto sm:w-full sm:max-w-sm bg-red-200 p-4">
              {error}
            </div>
          )} */}

          <div class="border border-t-0 border-black p-4 pt-0 sm:mx-auto sm:w-full sm:max-w-sm text-xs">
            {/* <form class="space-y-6" onSubmit={handleSubmit}> */}
            <form class="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div class="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autocomplete="name"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div class="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>

          <div className="border border-black border-b-4 border-b-[#AAAAAA] text-sm p-2 m-2 w-auto sm:mx-auto sm:w-full sm:max-w-sm">
            <a
              href="https://github.com/login"
              className="flex gap-2 text-center"
            >
              <FaGithub /> <span>Login or Register via Github</span>
            </a>
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
}

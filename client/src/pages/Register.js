import React from "react";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div>
      <div classNameName="w-full flex flex-wrap">
        <div classNameName="w-1/2 shadow-2xl">
          <img
            classNameName="object-cover w-full h-screen hidden md:block"
            src="https://source.unsplash.com/IXUM4cJynP0"
          />
        </div>
        <div classNameName="w-full md:w-1/2 flex flex-col">
          <div classNameName="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
            <a
              href="#"
              classNameName="bg-black text-white font-bold text-xl p-4"
            >
              Logo
            </a>
          </div>

          <div classNameName="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p classNameName="text-center text-3xl">Join Us.</p>
            <form
              classNameName="flex flex-col pt-3 md:pt-8"
              onsubmit="event.preventDefault();"
            >
              <div classNameName="flex flex-col pt-4">
                <label for="name" classNameName="text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Smith"
                  classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div classNameName="flex flex-col pt-4">
                <label for="email" classNameName="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div classNameName="flex flex-col pt-4">
                <label for="password" classNameName="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div classNameName="flex flex-col pt-4">
                <label for="confirm-password" classNameName="text-lg">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Password"
                  classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <input
                type="submit"
                value="Register"
                classNameName="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              />
            </form>
            <div classNameName="text-center pt-12 pb-12">
              <p>
                Already have an account?{" "}
                <a href="login.html" classNameName="underline font-semibold">
                  Log in here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";

import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  return (
    <div>
      <NavbarHome />
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">


          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center font-medium text-small text-3xl">Hei igjen!</p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onsubmit="event.preventDefault();"
            >
              <div className="flex flex-col pt-4">
                <label for="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label for="password" className="text-lg">
                  Passord
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <input
                type="submit"
                value="Logg inn"
                className="bg-indigo-500 rounded-lg text-white font-medium hover:bg-gray-600 text-lg hover:bg-gray-700 p-2 mt-8"
              />
            </form>
            <div className="text-center pt-12">
              <p>
                Har du ikke konto og ønsker du å registrere deg?{" "}
                <a href="register.html" className="underline font-semibold">
                  Klikk her.
                </a>
              </p>
            </div>
            <div className="text-center pt-6">
              <p>
                Glemt passordet?{" "}
                <a href="/forgotten-password" className="underline font-semibold">
                  Lag nytt.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://images.unsplash.com/photo-1557682268-e3955ed5d83f?ixlib=rb-1.2.1&auto=format&fit=crop&w=243&q=80"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

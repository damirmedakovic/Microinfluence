import React from "react";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";

export default function ForgottenPassword() {
  return (
    <div>
      <NavbarHome />
      <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div class="h-screen flex justify-center">
          <div class="bg-white w-3/5">

          <p className="text-center font-medium text-small text-3xl mt-12">Det skjer de beste av oss...</p>
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
                Har du ikke konto og ønsker du å registrere deg som influencer?{" "}
                <a href="register.html" className="underline font-semibold">
                  Klikk her.
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

import React from "react";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";

export default function RegisterCompany() {
  return (
    <div>

        <NavbarHome />
      <div className="w-full flex flex-wrap">
        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-auto hidden md:block"
            src="https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=243&q=80"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center pt-10 font-bold text-small text-2xl">
              <mark className="text-indigo-800 bg-transparent">Gratulerer, </mark>du er på god vei!
            </p>
            <p className="text-center font-medium text-small">
              Kreative sjeler venter på å feire dine produkter. Fyll ut skjemaet nedenfor så lager vi en profil for deg.
            </p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onsubmit="event.preventDefault();"
            >
              <div className="flex flex-col pt-4">
                <label for="email" className="text-lg">
                  Navn
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label for="email" className="text-lg">
                  Etternavn
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
                  Firmatype
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

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
                <label for="email" className="text-lg">
                  Passord
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>


              <input
                type="submit"
                value="Kom i gang!"
                className="bg-indigo-500 rounded-lg text-white font-medium hover:bg-indigo-400 text-lg hover:bg-gray-700 p-2 mt-8"
              />
            </form>
            <div className="text-center pt-12">
              <p>
                Har du allerede en bedriftskonto?{" "}
                <a href="register.html" className="underline font-semibold">
                  Logg inn.
                </a>
              </p>
            </div>
            <div className="text-center pt-3 pb-10">
              <p>
                Ikke en bedrift?{" "}
                <a href="/register-influencer" className="underline font-semibold">
                  Registrer deg som innholdsprodusent.
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

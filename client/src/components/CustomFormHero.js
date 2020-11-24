import React from 'react';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomFormHero() {
    return (
        <div>
            <div className="mx-auto max-w-6xl p-12">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2 max-w-md flex flex-col justify-center">
            <div className="md:text-3xl text-xl font-black uppercase">
              Influencers + Brands = <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="text-xl mt-4">
              Få ditt merke sett som bedrift. Få kontakt med bedrifter som
              influencer.
            </div>

            <div className="mt-4">
              <div className="inline-block font-bold text-xl mt-4 mr-2">
                Jeg er en
              </div>
              <div
                className="inline-block shadow-md font-medium m-2 py-2 px-4 text-green-100
                  cursor-pointer bg-teal-600 rounded text-lg tr-mt text-center"
              >
                Bedrift
              </div>{" "}
              <div
                className="inline-block shadow-md font-medium m-2 py-2 px-4 text-green-100
                  cursor-pointer bg-teal-600 rounded text-lg tr-mt text-center"
              >
                Influencer
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2 ">
            <div className="shadow-md flex-auto max-w-sm p-10 pb-20">
              <span className="font-bold h-9 mt-3 text-gray-600 text-xs leading-8 uppercase">
                Registrer som bedrift
              </span>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Navn
                </div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  {" "}
                  <input
                    placeholder="Kari"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />{" "}
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Etternavn
                </div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  {" "}
                  <input
                    placeholder="Hansen"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />{" "}
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> E-mail
                </div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  {" "}
                  <input
                    placeholder="navn@domene.no"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />{" "}
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Platform
                </div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  {" "}
                  <input
                    placeholder="Instagram, YouTube, MySpace..."
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />{" "}
                </div>
              </div>
              <div className="mt-6 relative">
                <Link to="/register">
                  <div
                    className="shadow-md font-medium py-2 px-4 text-green-100
                  cursor-pointer bg-teal-600 rounded text-lg tr-mt  absolute text-center w-full"
                    href="/register"
                  >
                    Fortsett
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
            
        </div>
    )
}

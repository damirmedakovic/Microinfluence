import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavbarCompany from "../components/NavbarCompany";
import NavbarHome from "../components/NavbarHome";
import { Link } from "react-router-dom";

export default function DashboardShow() {
  return (
    <div>
      <NavbarCompany />
      <div>
        <div class="bg-indigo-800">
          <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between flex-wrap">
              <div class="w-0 flex-1 flex items-center">
                <p class="ml-3 font-medium text-white truncate">
                  <span class="md:hidden">We announced a new product!</span>
                  <span class="hidden md:inline">Mitt skrivebord</span>
                </p>
              </div>
              <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="/new-campaign"
                  class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  + Ny kampanje
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/5 tracking-widest text-gray-700 bg-gray-100 border-r-2 text-sm font-medium h-screen overflow-scroll">
          <div class="text-center mb-4 mt-8">
            {" "}
            <span class="font-bold uppercase text-md">Kampanjer</span>
          </div>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Alle
            </div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Aktive
            </div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Utgåtte
            </div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Pausede
            </div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Planlagte
            </div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Skisser
            </div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Ferdige
            </div>
          </a>
          <div class="text-center mb-4 mt-8">
            {" "}
            <span class="font-bold uppercase text-md">Innholdssamling</span>
          </div>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Tilgjengelige
            </div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Kjøpte
            </div>
          </a>

          <div class="text-center mb-4 mt-8">
            {" "}
            <span class="font-bold uppercase text-md">Influencere</span>
          </div>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Alle
            </div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Dine fans
            </div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Grupper
            </div>
          </a>
        </div>
        <div class="w-4/5 h-screen flex flex-col justify-center items-center">
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Role
                        </th>
                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                alt=""
                              />
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                Jane Cooper
                              </div>
                              <div class="text-sm text-gray-500">
                                jane.cooper@example.com
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            Regional Paradigm Technician
                          </div>
                          <div class="text-sm text-gray-500">Optimization</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Admin
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            class="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}

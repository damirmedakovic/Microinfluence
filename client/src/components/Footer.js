import React from "react";

import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {

  const apiUrl = "http://127.0.0.1:8000/users/"

  fetch(apiUrl).then(response => response.json().then(data => console.log(data)))



  return (
    <div>
      <section class="bg-indigo-800 py-8 w-full">
        <div class="container mx-auto px-8 text-white">
          <div class="table w-full">
            <div class="block sm:table-cell">
              <p class="uppercase font-bold text-sm sm:mb-6">Hurtiglenker</p>
              <ul class="list-reset text-xs mb-6">
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="hover:text-grey-dark">
                    Om oss
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="hover:text-grey-dark">
                    Ofte stilte spørsmål
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="hover:text-grey-dark">
                    Bedrifter
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="hover:text-grey-dark">
                    Influencere
                  </a>
                </li>
              </ul>
            </div>
            <div class="block sm:table-cell text-white">
              <p class="uppercase font-bold text-sm sm:mb-6">Følg oss på</p>
              <ul class="list-reset text-xs mb-6">
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="hover:text-grey-dark">
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="hover:text-grey-dark">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="text-grey hover:text-grey-dark">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="hover:text-grey-dark">
                    <FontAwesomeIcon icon={faYoutube} /> YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div class="block sm:table-cell text-white">
              <p class="uppercase font-bold text-white text-sm sm:mb-6">
                Kontakt oss
              </p>
              <ul class="list-reset text-xs mb-6">
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="hover:text-grey-dark">
                  <FontAwesomeIcon icon={faMailBulk} /> hei@microinfluence.no
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="hover:text-grey-dark">
                    St. Olavs gate 14
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="hover:text-grey-dark">
                    7012, Trondheim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-black text-white text-center text-sm font-sm py-3">ⒸMicroinfluence, 2020</div>
    </div>
  );
}

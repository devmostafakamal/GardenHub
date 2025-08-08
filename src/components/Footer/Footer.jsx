import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareYoutube,
} from "react-icons/fa6";
import { NavLink } from "react-router";

function Footer() {
  return (
    <div>
      <div className="bg-[#56a30e] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:greenhub@garden.com"
                className="text-green-300 hover:underline"
              >
                greenhub@garden.com
              </a>
            </p>
            <p>Phone: +880 1234 567890</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-green-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <NavLink to={"https://www.facebook.com/"} target="_blank">
                <FaFacebookSquare size={25} />
              </NavLink>
              <NavLink to={"https://www.instagram.com/"} target="_blank">
                <FaSquareInstagram size={25} />
              </NavLink>
              <NavLink to={"https://www.youtube.com/"} target="_blank">
                <FaSquareYoutube size={25} />
              </NavLink>
              <NavLink to={"https://web.whatsapp.com/"} target="_blank">
                <FaSquareWhatsapp size={25} />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-300">
          © {new Date().getFullYear()} PlantVerse. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;

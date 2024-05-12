import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900  relative before:border-b-[5vh] before:block before:border-l-[100vw] before:border-l-transparent before:border-b-gray-900 before:h-0 before:left-0 before:right-0 before:bottom-full before:w-0 before:absolute">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between z-auto">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear() + " "}
          <a href="#" className="hover:underline">
            Muhammad azouz
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

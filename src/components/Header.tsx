import React from "react";
import Link from "next/link";
import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-gray-50 dark:bg-gray-700 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <Link href="/">
          <Image
            src="./images/coin.svg"
            alt="Logo"
            width={0}
            height={0}
            className="h-8 w-auto mr-2"
            title="Logo"
          />
        </Link>
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => console.log("Toggle menu")}
            className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                className="hidden"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
              />
              <path
                className="block"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav className="hidden sm:flex sm:items-center sm:w-auto">
        <Link
          href="/"
          className="block px-2 py-1 text-white font-semibold hover:bg-gray-700 rounded sm:mt-0 sm:ml-2"
        >
          Início
        </Link>
        <Link
          href="/contato"
          className="block px-2 py-1 text-white font-semibold hover:bg-gray-700 rounded sm:mt-0 sm:ml-2"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
};

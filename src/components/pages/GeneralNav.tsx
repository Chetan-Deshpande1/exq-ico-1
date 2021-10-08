import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./style.css";
import Accountmodal from "../header/Accountmodal";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GeneralNav() {
  const [onBtnClass, setOnBtnClass] = useState(
    "inline-block chain font-11 shadow-md"
  );
  const [offBtnClass, setOffBtnClass] = useState(
    "inline-block chain-disabled font-11"
  );
  const [offChk, setOffChk] = useState(true);
  const [onChk, setOnChk] = useState(false);

  function offChain() {
    setOffBtnClass("inline-block chain-disabled font-11");
    setOnBtnClass("inline-block chain font-11 shadow-md");
    setOffChk(false);
    setOnChk(true);
  }

  function onChain() {
    setOnBtnClass("inline-block chain-disabled font-11");
    setOffBtnClass("inline-block chain font-11 shadow-md");
    setOffChk(true);
    setOnChk(false);
  }
  return (
    <Disclosure as="nav" className="bg-white ">
      {({ open }) => (
        <>
          <div className="md:w-auto">
            <div className="flex justify-between ">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-start">
                  <img
                    className="block lg:hidden logo-img "
                    src="https://eqx.equinox.business/images/logo2x.png"
                    alt="Equinox"
                  />
                  <img
                    className="hidden lg:block logo-img "
                    src="https://eqx.equinox.business/images/logo2x.png"
                    alt="Equinox"
                  />
                </div>
              </div>

              <div className="flex  align-middle">
                <div className="hidden inline-block md:ml-12 md:flex md:justify-middle md:space-x-16 mx-16 align-middle font-20">
                  <Link
                    to="/"
                    className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 font-20 font-semibold"
                  >
                    HOME
                  </Link>
                  <Link
                    to="/main"
                    className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 font-20 font-semibold"
                  >
                    SWAP
                  </Link>
                  <Link
                    to="/dex"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  font-20 font-semibold"
                  >
                    ENTEPRISE DEX
                  </Link>
                  <Link
                    to="/dashboard"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  font-20 font-semibold"
                  >
                    ACCESS ORG 3.0
                  </Link>
                  <Link
                    to={{ pathname: "https://equinox.business/" }}
                    target="_blank"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  font-20 font-semibold"
                  >
                    ABOUT EQX
                  </Link>
                </div>
                <div id="connect" className="block toggle-btn flex justify-between">
                  {/* <div className={onBtnClass} onClick={() => offChain()}>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={offChk}
                    />
                    <label className="font-11">
                      <span className="font-extrabold">OFF</span>-WALLET
                    </label>
                  </div>
                  <div className={offBtnClass} onClick={() => onChain()}>
                    <input type="checkbox" className="hidden" checked={onChk} />
                    <label className="font-11">
                      <span className="font-extrabold">ON</span>-WALLET
                    </label>
                  </div> */}
                  <Accountmodal/>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                HOME
              </Link>
              <Link
                to="/main"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                SWAP
              </Link>
              <Link
                to="/dex"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                ENTERPRISE DEX
              </Link>
              <Link
                to="/dashboard"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                ACCESS ORG 3.0
              </Link>
              <Link
                to={{ pathname: "https://equinox.business/" }}
                target="_blank"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                ABOUT EQX
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

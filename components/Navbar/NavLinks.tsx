import React from "react";
import Link from "next/link";

import { links } from "./MyLinks";

const NavLinks = () => {
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <Link href={`${link.link}`}>
              {/*  <h1 className="px-7">{link.name}</h1> */}
              {link.name}
            </Link>
            {link.submenu && (
              <div className="w-full z-[10000] submenu">
                <div className="absolute top-[90px] left-[0] right-[0]  group-hover:block hover:block hidden  subsubmenu">
                  {/* <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-gray-200 rotate-45"></div>
                  </div> */}
                  <div className="bg-bgBackground shadow-2xl  p-5 grid grid-flow-row-dense  grid-cols-4 gap-5 w-full rounded-b-xl ">
                    {link.sublinks?.map((mysublink, index) => (
                      <div key={index} className="">
                        <h1 className="text-md font-bold font-sans ">
                          {mysublink.Head}
                        </h1>
                        <div className="max-h-52 w-auto  flex flex-col gap-2 flex-wrap border border-slate-300  rounded p-2  mt-2 hover:shadow-2xl">
                          {mysublink.sublinks.map((slink, index) => (
                            <li
                              key={index}
                              className="text-xs text-gra-60  max-h-10 hover:bg-slate-300 p-1"
                            >
                              <Link
                                key={slink.name}
                                href={slink.link}
                                // className="hover:text-primary"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;

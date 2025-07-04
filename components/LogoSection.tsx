"use client";

import Image from "next/image";
import Logo from "../public/logo.jpg";
import X from "@/icons/X";
import Github from "@/icons/Github";
import Peerlist from "@/icons/Peerlist";
import Linkedin from "@/icons/Linkedin";

function LogoSection() {
  return (
    <div className="px-5 flex justify-between items-center md:px-20 lg:px-32">
      <div className="flex justify-center items-center gap-4">
        {/* Logo section */}
        <div>
          <Image
            src={Logo}
            width={64}
            height={64}
            alt="logo"
            className="rounded-full border-2 border-orange-200 "
          />
        </div>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-2">
          <li>
            <a href="https://x.com/amitkushh">
              <X />
            </a>
          </li>
          <li>
            <a href="https://github.com/amitkushh">
              <Github />
            </a>
          </li>
          <li>
            <a href="https://peerlist.io/amitkushh">
              <Peerlist />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amitkushh/">
              <Linkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LogoSection;

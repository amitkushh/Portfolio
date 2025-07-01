"use client";

import Image from "next/image";
import Logo from "../public/logo.jpg";
import BlueTick from "../public/tick.png";
import X from "@/icons/X";
import Github from "@/icons/Github";
import Peerlist from "@/icons/Peerlist";
import Linkedin from "@/icons/Linkedin";

function LogoSection() {
  return (
    <div className="flex justify-between items-center">
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
        {/* Name Section */}
        <div className="flex flex-col justify-center">
          <h1 className="flex items-center gap-2 font-bold text-2xl text-white">
            Amit <Image src={BlueTick} className="h-5 w-5" alt="tick" />
          </h1>
          <span className="text-gray-400 font-semibold">@amitkushh</span>
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

"use client";
import Email from "@/icons/Email";
import X from "@/icons/X";

function Social() {
  return (
    <div className="mt-5">
      <span className="text-gray-400 text-xl">
        Freelance, full-time or Internship
      </span>
      <div className="flex items-center gap-3">
        <a href="mailto:amitkush.dev@gmail.com">
          <Email />
        </a>
        <a href="https://x.com/amitkushh">
          <X />
        </a>
      </div>
    </div>
  );
}

export default Social;

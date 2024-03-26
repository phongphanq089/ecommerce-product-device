import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const SocialMedia = () => {
  return (
    <section className="mt-10">
      <div className="mx-auto max-w-sm  border-4 border-color_6 shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-color_6  p-4 md:p-10 flex flex-col items-center justify-center text-center">
        <p className="text-color_6 text-xl md:text-2xl font-bold border-b-4 border-b-color_6">
          Share this post
        </p>
        <ul className="flex flex-row items-center justify-center text-center mt-5">
          <li className="mx-2">
            <a
              href=""
              target="_blank"
              aria-label="Share on Twitter"
              title="Twitter"
            >
              <Twitter className="h-10 w-10 text-color_6 hover:text-color_2" />
            </a>
          </li>

          <li className="mx-2">
            <a
              href=""
              target="_blank"
              aria-label="Share on LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="h-10 w-10 text-color_6 hover:text-color_2" />
            </a>
          </li>

          <li className="mx-2">
            <a
              href=""
              target="_blank"
              aria-label="Share on Mastodon"
              title="Facebook"
            >
              <Facebook className="h-10 w-10 text-color_6 hover:text-color_2" />
            </a>
          </li>

          <li className="mx-2">
            <a
              href=""
              target="_blank"
              aria-label="Share on Facebook"
              title="Facebook"
            >
              <Instagram className="h-10 w-10 text-color_6 hover:text-color_2" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SocialMedia;

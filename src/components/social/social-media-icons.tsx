"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiTiktok,
} from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"24"} color={"#fff"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} color={"#fff"} />,
  },
  {
    name: "Twitter",
    href: config.social.twitter,
    icon: <SiTwitter size={"24"} color={"#fff"} />,
  },
  {
    name: "Instagram (telvins.l)",
    href: "https://www.instagram.com/reel/C4-ZseMtV6D/?hl=en",
    icon: <SiInstagram size={"24"} color={"#fff"} />,
  },
  {
    name: "TikTok (Fun)",
    href: "https://www.tiktok.com/@telvins.l",
    icon: <SiTiktok size={"24"} color={"#fff"} />,
  },
  {
    name: "TikTok (Projects)",
    href: "https://www.tiktok.com/@website.app.developer",
    icon: <SiTiktok size={"24"} color={"#fff"} />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10 flex flex-wrap gap-2">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button variant={"ghost"} title={button.name}>
              {button.icon}
            </Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;

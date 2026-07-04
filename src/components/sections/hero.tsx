import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { SiMaildotru, SiWhatsapp } from "react-icons/si"; // Email + WhatsApp icons
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <>
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "text-lg sm:text-xl md:text-2xl font-medium text-slate-600 dark:text-zinc-400",
                      "tracking-wide mb-2 ml-2"
                    )}
                  >
                    Hey! Im
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "text-slate-800 dark:text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight",
                          "ml-2 cursor-default tracking-tight"
                        )}
                      >
                        Kelvins Ontiri
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      There’s something waiting in DevTools 👀
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "mt-4 ml-2 text-slate-500 dark:text-zinc-400 text-lg md:text-xl font-light max-w-lg"
                    )}
                  >
                    I turn bold ideas into fast, beautiful products — fintech
                    apps, e-commerce platforms, marketplaces & the websites
                    that make businesses look as good as they actually are. 🚀
                  </p>
                </BlurIn>

                <BlurIn delay={1.35}>
                  <div className="mt-6 ml-2 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base font-mono text-slate-600 dark:text-zinc-300">
                    <span>
                      <strong className="text-slate-800 dark:text-white">
                        10+
                      </strong>{" "}
                      products shipped
                    </span>
                    <span>
                      <strong className="text-slate-800 dark:text-white">
                        3
                      </strong>{" "}
                      countries served
                    </span>
                    <span>
                      <strong className="text-slate-800 dark:text-white">
                        24/7
                      </strong>{" "}
                      building mode 😅
                    </span>
                  </div>
                </BlurIn>
              </div>

              <div className="mt-10 md:ml-2 flex gap-3">
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <Link href="#contact">
                      <Button
                        variant={"outline"}
                        className="px-6 py-2 text-md font-semibold"
                      >
                        Hire Me
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Lets build something amazing! 🚀</p>
                  </TooltipContent>
                </Tooltip>

                {/* Email Button */}
                <Link href="mailto:kelvins200k@gmail.com" target="_blank">
                  <Button variant="outline">
                    <SiMaildotru size={22} />
                  </Button>
                </Link>

                {/* WhatsApp Button */}
                <Link
                  href="https://wa.me/25453274728"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <SiWhatsapp size={22} />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="grid col-span-1">{/* You can add image/3D here */}</div>
      </div>

      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors duration-500 ease-in"
      )}
      style={{
        background: isActive ? "hsl(var(--background) / .8)" : "transparent",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className={cn(styles.bar, "flex items-center justify-between px-4 py-3")}>
        {/* Left: Brand */}
        <Link href="/" className="flex items-center text-lg font-bold">
          <Button variant="link" className="text-lg text-primary">
            Kelvins
          </Button>
        </Link>

        {/* Right: Theme Toggle + Menu Button */}
        <div className="flex items-center gap-4">
          <FunnyThemeToggle className="w-6 h-6" />
          <Button
            variant="ghost"
            onClick={() => setIsActive(!isActive)}
            className={cn(
              styles.el,
              "p-0 h-6 bg-transparent flex items-center justify-center"
            )}
          >
            <div className="relative flex items-center">
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
                className="text-sm font-medium"
              >
                Menu
              </motion.p>
              <motion.p
                variants={opacity}
                animate={isActive ? "open" : "closed"}
                className="text-sm font-medium"
              >
                Close
              </motion.p>
            </div>
            <div
              className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
            ></div>
          </Button>
        </div>
      </div>

      {/* Background animation */}
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      />

      {/* Mobile nav */}
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

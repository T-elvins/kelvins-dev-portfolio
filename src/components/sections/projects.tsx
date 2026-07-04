"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 md:px-8 pb-24 md:min-h-[130vh]">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-4"
          )}
        >
          Projects
        </h2>
      </Link>
      <p className="text-center text-muted-foreground font-mono max-w-xl mx-auto mb-16">
        A selection of real products I&apos;ve designed and built — apps,
        stores, marketplaces & more. Tap a card for the full story.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 place-items-center">
        {projects.map((project, index) => (
          <Modall key={project.src} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
const Modall = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      className="flex items-center justify-center w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full">
          <div
            className={cn(
              "relative w-full max-w-[380px] h-auto rounded-2xl overflow-hidden",
              "border border-border shadow-lg hover:shadow-2xl",
              "transition-all duration-300 hover:-translate-y-1"
            )}
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 object-cover group-hover/modal-btn:scale-[1.08] transition-transform duration-500"
              src={project.src}
              alt={project.title}
              width={500}
              height={340}
            />
            <div className="absolute w-full h-2/3 bottom-0 left-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-5">
                <div className="text-xs uppercase tracking-wide font-mono bg-white/90 text-black rounded-full w-fit px-3 py-1 mb-2">
                  {project.category}
                </div>
                <div className="text-lg md:text-xl font-bold text-left text-white leading-snug">
                  {project.title}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            {project.live && project.live !== "#" && (
              <Link href={project.live} target="_blank">
                <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                  Visit
                </button>
              </Link>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </motion.div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {project.content}
    </>
  );
};

import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live }: { live: string }) => {
  if (!live || live === "#") return null;
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  live: string;
};
const projects: Project[] = [
  {
    id: "modern-ecommerce-app",
    category: "Mobile App",
    title: "Nova Cart - Modern E-commerce Mobile App",
    src: "/assets/projects-screenshots/ecomapp/thumb.jpg",
    screenshots: [],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Modern, Fluid Shopping Experience — Built Mobile-First
          </TypographyP>

          <TypographyP className="font-mono">
            <strong>Overview:</strong> This is a concept e-commerce mobile
            app focused entirely on a smooth, native-feeling shopping
            journey — from browsing categories and product detail pages,
            to adding items to a cart, applying promotions and completing
            checkout with clean, snappy transitions throughout. The goal
            was to prove that a mobile shopping app can feel as fast and
            polished as the biggest global marketplaces, with a UI that
            gets out of the way and lets the products shine.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">✨ What makes it modern</TypographyH3>
          <p className="font-mono mb-2">
            • Buttery smooth screen transitions & micro-interactions <br />
            • Clean product cards with instant add-to-cart feedback <br />
            • Persistent cart & simplified multi-step checkout <br />
            • Search, filters & category browsing built for thumbs, not
            mice <br />
            • Fully responsive across phone sizes
          </p>

          <div className="my-6 rounded-lg overflow-hidden border border-border">
            <video
              src={`${BASE_PATH}/ecomapp/preview.mp4`}
              controls
              playsInline
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className="font-mono mb-2 text-center text-sm text-muted-foreground">
            This is a private product build, so there&apos;s no public link —
            the clip above walks through the actual app in action.
          </p>
        </div>
      );
    },
  },
  {
    id: "3d-clothing-store",
    category: "3D & E-commerce",
    title: "Threadverse - Immersive 3D Clothing Store",
    src: "/assets/projects-screenshots/clothing3d/thumb.jpg",
    screenshots: [],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Threadverse — Shopping for Clothes Should Feel Like an Experience
          </TypographyP>

          <TypographyP className="font-mono">
            <strong>Overview:</strong> Threadverse is a concept fashion
            storefront built around interactive 3D product presentation
            instead of flat product photos. Garments rotate, fold and drape
            in real time as you scroll and interact — giving shoppers a much
            closer sense of fit, texture and movement than a static image
            ever could.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">🧵 What makes it different</TypographyH3>
          <p className="font-mono mb-2">
            • Interactive 3D garment viewer — rotate & inspect before you
            buy <br />
            • Scroll-driven animation that keeps the experience feeling
            alive, not static <br />
            • Clean, editorial-style layout that lets the product be the
            hero <br />
            • Built mobile-first, so the 3D experience stays smooth on
            phones too
          </p>

          <div className="my-6 rounded-lg overflow-hidden border border-border">
            <video
              src={`${BASE_PATH}/clothing3d/preview.mp4`}
              controls
              playsInline
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className="font-mono mb-2 text-center text-sm text-muted-foreground">
            This is a concept build exploring 3D commerce, so there&apos;s no
            public link — the clip above shows the interaction in action.
          </p>
        </div>
      );
    },
  },
  {
    id: "delivery-app-platform",
    category: "Delivery & Logistics",
    title: "QuickDrop - On-Demand Delivery Platform",
    src: "/assets/projects-screenshots/deliveryapp/2.webp",
    screenshots: ["1.webp", "2.webp", "3.webp", "4.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo, PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            QuickDrop — A Full Order-to-Doorstep Delivery Experience
          </TypographyP>

          <TypographyP className="font-mono">
            <strong>Overview:</strong> QuickDrop is a concept on-demand
            delivery platform covering both sides of the experience: a
            customer-facing app for browsing, ordering and choosing
            delivery or self-pickup, and a live dispatch dashboard where the
            business tracks every driver&apos;s route on a real-time map.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">📱 The Customer App</TypographyH3>
          <p className="font-mono mb-2">
            • Simple sign-in with Google & Apple options <br />
            • Loyalty points & redeemable rewards <br />
            • Delivery or self-pickup, chosen right from the home screen{" "}
            <br />
            • Menu browsing with live customization & checkout
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/deliveryapp/1.webp`,
              `${BASE_PATH}/deliveryapp/2.webp`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">🗺️ Live Dispatch Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Behind the scenes, dispatchers see every active driver on a live
            map, with route history, ETAs and per-driver timelines — turning
            &quot;where&apos;s my order&quot; into a question the business
            can always answer.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/deliveryapp/3.webp`,
              `${BASE_PATH}/deliveryapp/4.png`,
            ]}
          />

          <p className="font-mono mb-2 text-center text-sm text-muted-foreground">
            This is a concept product build, so there&apos;s no public link.
          </p>
        </div>
      );
    },
  },
  {
    id: "car-showcase-site",
    category: "Automotive",
    title: "AutoShow - Cinematic Car Showcase Website",
    src: "/assets/projects-screenshots/carsite/thumb.jpg",
    screenshots: [],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AutoShow — A Cinematic Landing Experience for Car Brands
          </TypographyP>

          <TypographyP className="font-mono">
            <strong>Overview:</strong> AutoShow is a concept website built
            for showcasing a vehicle the way a dealership showroom would —
            full-bleed motion, a scroll-driven reveal of the car&apos;s
            design details, and a layout built to make the vehicle feel as
            premium on screen as it does in person.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">🏎️ Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Full-screen cinematic video hero <br />
            • Scroll-triggered reveals of features & specs <br />
            • Smooth, high-end motion design throughout <br />
            • Built to convert visitors into showroom visits or test-drive
            bookings
          </p>

          <div className="my-6 rounded-lg overflow-hidden border border-border">
            <video
              src={`${BASE_PATH}/carsite/preview.mp4`}
              controls
              playsInline
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className="font-mono mb-2 text-center text-sm text-muted-foreground">
            This is a concept build, so there&apos;s no public link — the
            clip above shows the site in motion.
          </p>
        </div>
      );
    },
  },
  {
    id: "debithub-banking-app",
    category: "Fintech & Mobile App",
    title: "DebitHub - Digital Banking & Loans Mobile App",
    src: "/assets/projects-screenshots/debithub/4.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.firebase, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            DebitHub — A Full Digital Banking & Micro-Loans Experience
          </TypographyP>

          <TypographyP className="font-mono">
            <strong>Overview:</strong> DebitHub is a mobile-first fintech
            application that lets users sign up, verify their identity,
            manage a virtual debit card, transfer funds, pay bills and view
            a full account statement — all from their phone. Every core
            banking flow was designed to feel instant and trustworthy: card
            balances update in real time, notifications keep users informed
            of every transaction, and a dedicated admin console gives the
            business full visibility and control over its customer base.
          </TypographyP>

          <ProjectsLinks live={this.live} />

          <TypographyH3 className="my-4 mt-8">🔐 Core Features</TypographyH3>
          <p className="font-mono mb-2">
            • Secure sign up, login & password recovery flows <br />
            • Live virtual VISA debit card with real-time balance <br />
            • Funds transfer, bill payments & account statements <br />
            • Push notifications & in-app alerts centre <br />
            • Full Admin Panel — manage users, review activity, reply to
            feedback and broadcast notifications <br />
            • Light & dark themed dashboards for a premium feel
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/debithub/1.png`,
              `${BASE_PATH}/debithub/2.png`,
              `${BASE_PATH}/debithub/3.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">🧑‍💻 Admin Control Centre</TypographyH3>
          <p className="font-mono mb-2">
            Behind every DebitHub account is an admin dashboard that gives
            the operations team a bird&apos;s-eye view of the whole platform —
            user management, activity logs, notifications and support
            replies, all in one clean, dark-themed panel.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/debithub/4.png`,
              `${BASE_PATH}/debithub/5.png`,
              `${BASE_PATH}/debithub/6.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "bib-ecommerce-tanzania",
    category: "E-commerce & Payments",
    title: "BelieveInABlessed (BIB) - Tanzania Fashion E-commerce",
    src: "/assets/projects-screenshots/bib/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://www.believeinablessed.com/",
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            BIB — A Full-Scale Fashion E-commerce Platform for Tanzania
          </TypographyP>

          <TypographyP className="font-mono">
            <strong>Overview:</strong> BelieveInABlessed (BIB) is a modern
            fashion storefront built for the Tanzanian market, complete
            with a live product catalogue, order tracking, coupons, flash
            sales and an <strong>affiliate program</strong> that rewards
            top-performing affiliates with real cash prizes every month.
            Payments are processed securely through a fully integrated{" "}
            <strong>Pesapal</strong> business gateway, so customers can pay
            with mobile money or card at checkout and the business can
            withdraw funds directly.
          </TypographyP>

          <ProjectsLinks live={this.live} />

          <TypographyH3 className="my-4 mt-8">🛍️ Storefront Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Elegant product browsing with categories & search <br />
            • Order tracking widget right on the navbar <br />
            • Monthly Affiliate Challenge with live leaderboard &
            countdown timer <br />
            • Coupons, flash sales & slide-managed promotions <br />
            • Dark mode & multi-language ready storefront
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/bib/1.png`,
              `${BASE_PATH}/bib/2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">📊 Store Admin & Payments</TypographyH3>
          <p className="font-mono mb-2">
            A full admin panel tracks revenue, orders, users, affiliates and
            pending commissions in real time, while a connected Pesapal
            business dashboard handles secure payment collection and
            withdrawals — giving the business complete financial visibility
            end-to-end.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/bib/3.png`,
              `${BASE_PATH}/bib/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "drivewise-kenya",
    category: "Marketplace & Automotive",
    title: "DriveWise Kenya - Verified Car Marketplace",
    src: "/assets/projects-screenshots/drivewise/3.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
    live: "https://www.drivewisekenya.com/",
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.postgres, PROJECT_SKILLS.prisma],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            DriveWise — Kenya&apos;s Only Verified Vehicle Marketplace
          </TypographyP>

          <TypographyP className="font-mono">
            <strong>Overview:</strong> DriveWise flips the script on buying
            a used car online. Instead of trusting a random listing, every
            single car on the platform is physically inspected by a
            DriveWise-certified mechanic and given a clear{" "}
            <strong>BUY / NEGOTIATE / AVOID</strong> verdict before a buyer
            ever sees it. I built the full marketplace experience — from
            the bold cinematic landing page to individual listing pages,
            verified showrooms and a tiered pricing system for inspection
            packages.
          </TypographyP>

          <ProjectsLinks live={this.live} />

          <TypographyH3 className="my-4 mt-8">🚗 Marketplace Features</TypographyH3>
          <p className="font-mono mb-2">
            • Verified listing pages with a locked VIN, unlockable seller
            contact & a DriveWise verdict badge <br />
            • Dealer &quot;Showrooms&quot; with their own verified inventory
            & badge level <br />
            • Three-tier inspection packages: Records, Verification &
            Concierge <br />
            • Hot Listings carousel highlighting featured & premium cars{" "}
            <br />
            • Fully responsive, dark cinematic UI with gold accent branding
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/drivewise/1.png`,
              `${BASE_PATH}/drivewise/2.png`,
              `${BASE_PATH}/drivewise/3.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">🛡️ Verification Tiers & Showrooms</TypographyH3>
          <p className="font-mono mb-2">
            Buyers choose their level of protection — from a quick digital
            records check to a full 166-point physical inspection, or a
            complete concierge sourcing service — while verified dealers
            get their own branded showroom page to showcase their
            inventory.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/drivewise/4.png`,
              `${BASE_PATH}/drivewise/5.png`,
              `${BASE_PATH}/drivewise/6.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "jewelry-website",
    category: "E-commerce & Portfolio",
    title: "Miko Cheni Jewelry - E-commerce Website",
    src: "/assets/projects-screenshots/aidockerfileoptimizer/2.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://mikocheni-jewerly.vercel.app/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.openai, PROJECT_SKILLS.netlify],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A beautifully designed jewelry e-commerce website that showcases handcrafted pieces with elegant visuals and smooth user experience. 
            Visitors can browse through collections, view high-resolution images, and explore detailed product descriptions. 
            Perfect for personal branding and client engagement, this portfolio is built with performance and aesthetics in mind.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              `${BASE_PATH}/aidockerfileoptimizer/1.png`,
              `${BASE_PATH}/aidockerfileoptimizer/2.png`,
              `${BASE_PATH}/aidockerfileoptimizer/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "ai-website-builder",
    category: "AI & Web Development",
    title: "AIWebGen - AI-Powered Website Builder",
    src: "/assets/projects-screenshots/financeme/1.png",
    screenshots: ["1.png"],
    live: "https://ai-website-builder-mu.vercel.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.maven,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.openai,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AIWebGen: AI Website Builder with React.js & Full DevOps Automation
          </TypographyP>

          <TypographyP className="font-mono">
            <strong>Overview:</strong>  
            AIWebGen is an intelligent website builder built with <strong>React.js</strong> that allows users to generate fully functional, responsive websites using AI-generated content and layout recommendations. The platform leverages AI to take simple user prompts and convert them into production-ready frontend components. This project focuses not only on the development of the frontend in React, but also on the complete DevOps lifecycle — from infrastructure provisioning to CI/CD and monitoring — deployed on AWS.
          </TypographyP>

          <ProjectsLinks live={this.live} />

          <TypographyH3 className="my-4 mt-8">🚀 Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • AI-powered layout and content generation<br />
            • Built with React.js, TailwindCSS, and RESTful backend integration<br />
            • Dockerized for portability and scalability<br />
            • Full DevOps pipeline: Terraform, Jenkins, Ansible, Prometheus, Grafana<br />
            • Hosted on AWS EC2 infrastructure
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/financeme/1.png`,
              `${BASE_PATH}/financeme/2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "car-configurator",
    category: "E-commerce & Automotive",
    title: "4By4 Car Configurator - Car Customization Website",
    src: "/assets/projects-screenshots/smartjobtracker/02.png",
    screenshots: ["01.png", "02.png"],
    live: "https://4by4car-build.vercel.app/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            I designed and developed a comprehensive <strong>4wheel car editor website</strong> web application to help users organize and manage their daily tasks efficiently. Built with a modern tech stack including <strong>React</strong>, <strong>Next.js</strong>, and <strong>Firebase</strong>, the app features real-time updates, task categorization, and an intuitive UI to enhance productivity. The responsive, mobile-first design ensures seamless use across devices.
          </TypographyP>

          <ProjectsLinks live={this.live} />

          <SlideShow
            images={[
              `${BASE_PATH}/smartjobtracker/01.png`,
              `${BASE_PATH}/smartjobtracker/02.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "ecommerce-website",
    category: "E-commerce",
    title: "ECOMOVE - Modern E-commerce Platform",
    src: "/assets/projects-screenshots/savinderpuriportfolio/01.png",
    screenshots: ["01.png", "02.png", "03.png","04.png","05.png"],
    live: "https://ecomove.com.ng",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Dive into a seamless shopping experience with this modern eCommerce website, designed and developed to showcase and sell products with ease. 🛒✨ Built using <strong>React</strong> and <strong>TypeScript</strong>, the site features a responsive design, intuitive navigation, dynamic product listings, and a secure checkout flow. From product discovery to purchase, every touchpoint is optimized for performance and user experience. 💻📦 A clean, scalable solution.
          </TypographyP>

          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              `${BASE_PATH}/savinderpuriportfolio/01.png`,
              `${BASE_PATH}/savinderpuriportfolio/02.png`,
              `${BASE_PATH}/savinderpuriportfolio/03.png`,
              `${BASE_PATH}/savinderpuriportfolio/04.png`,
              `${BASE_PATH}/savinderpuriportfolio/05.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;

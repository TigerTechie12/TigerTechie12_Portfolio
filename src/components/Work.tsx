import { useState, useCallback, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "ChatPay",
    category: "Full-Stack Payments & E2EE Chat Platform",
description: `An integrated ecosystem that merges end-to-end encrypted messaging with frictionless financial routing. It eliminates the barrier between communication and commerce by allowing users to execute instant P2P transfers and merchant payments directly within their chat interface. Engineered with military-grade NaCl (TweetNaCl) end-to-end encryption, the server acts purely as a WebSocket relay, ensuring absolute data privacy. It features automated OAuth for merchants, dynamic QR code generation, and robust financial infrastructure integrated with Stripe for OnRamps and Razorpay for OffRamp payouts.`,    tools: "Next.js, Node.js, PostgreSQL, Redis, WebSockets, TweetNaCl",
    image: "/images/chatpay.png",
    link: "https://chat-pay-two.vercel.app/",
    github: "https://github.com/TigerTechie12/ChatPay",
  },
  {
    title: "DreamSnap AI",
    category: "AI Model Training & Image Generation Platform",
    description: `A highly scalable SaaS platform that democratizes proprietary AI model training for brands and creators. Moving beyond generic prompting, it integrates with fal.ai to allow users to train entirely custom AI models on their own localized datasets. It empowers creators to generate, iterate, and curate bulk visual assets into managed 'Image Packs', drastically reducing content production costs. Built for enterprise readiness with Clerk authentication, the platform utilizes a robust TypeScript backend with Prisma, PostgreSQL, and AWS S3 for high-throughput asset storage.`,
    tools: "React, Node.js, Prisma, PostgreSQL, fal.ai, AWS S3, Clerk",
    image: "/images/dreamsnap.png",
    link: "https://dream-snap-eight.vercel.app/",
    github: "https://github.com/TigerTechie12/DreamSnap",
  },
  {
    title: "Cyberscape",
    category: "2D Metaverse Gaming Application",
description: `A browser-native, real-time spatial collaboration and gaming environment built for instant accessibility. Capitalizing on the market for lightweight virtual spaces, it runs entirely in the browser via React and the Canvas API. It is powered by a highly concurrent WebSocket backend that handles live movement, collision detection, and spatial interactions with zero perceived latency. The platform features a dynamic grid-building engine where users can curate virtual real estate using admin-managed element libraries, driving organic community growth.`,    tools: "React, Node.js, WebSockets, Canvas API, PostgreSQL, Prisma",
    image: "/images/cyberscape.png",
    link: "https://cyberscape-mu.vercel.app/",
    github: "https://github.com/TigerTechie12/Cyberscape",
  },
  {
    title: "Buildify",
    category: "In-Browser AI Web Builder & Code Editor",
    description: `A next-generation development tool that eliminates setup friction and accelerates product iteration. By integrating StackBlitz WebContainers, Buildify boots full Node.js environments directly inside the user's browser, turning any device into a powerful development machine instantly. It is supercharged by integrating LLaMA models via the Groq SDK to function as an embedded AI pair-programmer. With a real-time live preview architecture that compiles code instantaneously, it bridges the gap between low-code ease of use and pro-code flexibility.`,    tools: "React, Express.js, WebContainers, Groq SDK, LLaMA Models",
    image: "/images/buildify.png",
    link: "https://orrdr.com",
    github: "https://github.com/TigerTechie12/Buildify",
  },
  {
    title: "Survey-Poll",
    category: "Full-Stack Survey & Polling Application",
    description: `A high-performance data collection platform built to capture and analyze audience sentiment instantaneously. Engineered to process and broadcast real-time voting data, it provides instant statistical feedback crucial for high-stakes decision-making. The platform implements rigorous JWT authentication and bcrypt password hashing to ensure the integrity of the voting process. Utilizing the speed and type-safety of TypeScript, Express.js, and Prisma ORM, the backend efficiently routes and stores massive influxes of concurrent requests during viral polling events.`,
        tools: "React, Express.js, PostgreSQL, Prisma, JWT",
    image: "surveypoll.png",
    link: "https://survey-poll-app-1.vercel.app/",
    github: "https://github.com/TigerTechie12/Survey-Poll",
  },
  {
    title: "PayFlow",
    category: "Universal Cross-Chain Payroll System",
    description:
      "A decentralized payroll system enabling businesses to disburse multi-token salaries across blockchain networks with automated cross-chain bridging.",
    tools: "React, Web3, Yellow Network SDK, LI.FI SDK, Sui Move",
    image: "payflow.png",
    link: "https://pay-flow-delta.vercel.app/",
    github: "https://github.com/TigerTechie12/PayFlow",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goToNext() : goToPrev();
    }
  }, [goToNext, goToPrev]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div
            className="carousel-track-container"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-actions">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="carousel-btn carousel-btn-live"
                            data-cursor="disable"
                          >
                            View Live <MdArrowOutward />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="carousel-btn carousel-btn-github"
                            data-cursor="disable"
                          >
                            GitHub <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

import { useState, useCallback, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
   title: "ChatPay",
    category: "Full-Stack Payments & E2EE Chat Platform",
    tools: "Next.js, Node.js, PostgreSQL, Redis, WebSockets, TweetNaCl",
    image: "/images/chatpay.png",
    link: "https://chat-pay-two.vercel.app/",
  },
  {
    title: "DreamSnap AI",
    category: "AI Model Training & Image Generation Platform",
    tools: "React, Node.js, Prisma, PostgreSQL, fal.ai, AWS S3, Clerk",
    image: "/images/dreamsnap.png",
    link: "https://dream-snap-eight.vercel.app/",
  },
  {
    title: "Cyberscape",
    category: "2D Metaverse Gaming Application",
    tools: "React, Node.js, WebSockets, Canvas API, PostgreSQL, Prisma",
    image: "/images/cyberscape.png",
    link: "https://cyberscape-mu.vercel.app/",
  },
  {
   title: "Buildify",
    category: "In-Browser AI Web Builder & Code Editor",
    tools: "React, Express.js, WebContainers, Groq SDK, LLaMA Models, Tailwind CSS",
    image: "/images/buildify.png",
    link: "https://orrdr.com",
  },
  
  {
    title: "Survey-Poll",
    category: "Full-Stack Survey & Polling Application",
    tools: "React, Express.js, PostgreSQL, Prisma, Tailwind CSS, JWT",
    image: "/images/surveypoll.png",
    link: "https://orrdr.com",
  },

  {title: "PayFlow",
    category: "Universal Cross-Chain Payroll System",
    tools: "React, Web3, Yellow Network SDK, LI.FI SDK, Sui Move",
    image: "/images/payflow.png",
    link: "https://pay-flow-delta.vercel.app/",
  }
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
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
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
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
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

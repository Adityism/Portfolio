import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      const containerLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const boxRect = (boxes[0] as HTMLElement).getBoundingClientRect();
      const parentWidth = (boxes[0] as HTMLElement).parentElement!
        .getBoundingClientRect().width;
      const padding = parseInt(
        window.getComputedStyle(boxes[0] as HTMLElement).padding || "0"
      ) / 2;
      translateX =
        boxRect.width * boxes.length - (containerLeft + parentWidth) + padding;
    }

    setTranslateX();

    const workSectionHeight = window.innerHeight;
    const properEndValue = translateX + workSectionHeight;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${properEndValue}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        id: "work",
        invalidateOnRefresh: true,
        onRefresh: setTranslateX,
      },
    });

    tl.to(".work-flex", { x: -translateX, ease: "none" });

    const handleResize = () => {
      setTranslateX();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      tl.kill();
      ScrollTrigger.getById("work")?.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projects = [
    {
      title: "CAI – Smart Campus AI",
      repo: "https://github.com/Adityism/CAI",
      category: "AI Chatbot · RAG System",
      features:
        "FastAPI, PyTorch, MongoDB, Sentence-BERT · Contextual query routing over 700+ campus sources",
      image: "/images/cai.webp",
    },
    {
      title: "ExpensoAI",
      repo: "https://github.com/Adityism/ExpenzoAi",
      category: "NLP + Tabular Classification · Finance AI",
      features:
        "Sentence‑BERT, real‑time inference, PDF ingestion · 2M+ entries, 27 expense categories",
      image: "/images/expensoai.webp",
    },
    {
      title: "Server Optimization System",
      repo: "https://github.com/Adityism/Server-Consolidation-System",
      category: "Cloud Optimization · Infra Cost Reduction",
      features:
        "Docker, Prometheus, Grafana, Flask · Monitored 250+ containers with live dashboards",
      image: "/images/scd.webp",
    },
    {
      title: "Finlin E‑Commerce MVP",
      repo: "https://github.com/Adityism/Finlin-E-Commerce-MVP",
      category: "Full‑Stack Platform · High‑Load MVP",
      features:
        "Modular frontend, Razorpay, Admin panel · Built for 200K+ users, real-time order and RBAC management",
      image: "/images/finlin.webp",
    },
    {
      title: "ProfConnect",
      repo: "https://github.com/Adityism/Prof-Connect",
      category: "Student‑Faculty Platform · Scheduling",
      features:
        "Flask, React, Firebase · Central meeting scheduler and query routing",
      image: "/images/profconnect.webp",
    },
    {
      title: "UniFirst",
      repo: "https://github.com/Adityism/UniFirst",
      category: "Campus Social · Networking Platform",
      features:
        "FastAPI, Socket.IO, React, PostgreSQL · Real-time chat and AI‑recommendations",
      image: "/images/unifirst.webp",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((p, idx) => (
            <div className="work-box" key={idx}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{idx + 1}</h3>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.category}</p>
                  </div>
                </div>
                <h4>Tools & Features</h4>
                <p>{p.features}</p>
                <a
                  href={p.repo}
                  className="visit-project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="github-icon" />
                  Visit Project <span className="arrow">↗</span>
                </a>
              </div>
              <WorkImage image={p.image} alt={p.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
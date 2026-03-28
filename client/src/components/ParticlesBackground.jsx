import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab", // Grab feels more interconnected
        },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        grab: {
          distance: 140,
          links: { opacity: 0.5 }
        },
      },
    },
    particles: {
      color: {
        value: ["#5b99ff", "#7ca5ff", "#a5c2ff"], // Gradient colors
      },
      links: {
        color: "#5b99ff",
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60, // Slight increase for richer look
      },
      opacity: {
        value: { min: 0.1, max: 0.4 },
      },
      shape: { type: "circle" },
      size: {
        value: { min: 0.5, max: 1.5 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="fixed inset-0 z-0 pointer-events-none"
        options={particlesConfig}
      />
    );
  }

  return null;
}

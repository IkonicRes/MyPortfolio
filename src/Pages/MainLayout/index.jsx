import React, { useCallback } from "react";
import { Outlet } from "react-router";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadImageShape } from "tsparticles-shape-image";
import Header from "../../Components/Header";
import particleSprite from "../../assets/images/react.svg";

export default function MainLayout() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);

    // Load the image shape properly by providing an object.
    await loadImageShape(engine, {
      src: particleSprite,
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
    
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0e0025", // Background color set to black
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false, // Disable hover interaction for a lightning effect
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#03f4fc", // Particle color set to white
            },
            links: {
              enable: false, // Disable links between particles
            },
            move: {
              enable: true,
              direction: "none",
              outModes: {
                default: "out",
              },
              random: true, // Random movement for a lightning effect
              speed: {
                min: 0.1,
                max: 2,
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 150, // Increase the number of particles for a denser lightning effect
            },
            opacity: {
              value: 0.5,
              random: true, // Random opacity for a more dynamic effect
            },
            shape: {
                value: "triangle"
            //   type: "image",
            //   image: {
            //     src: "particleSprite", // Use the same name as in loadImageShape
            //     width: 100, // Specify the width of the image
            //     height: 100, // Specify the height of the image
            //   },
            },
            size: {
              value: {
                min: 0.2,
                max: 3,
              },
            },
          },
          detectRetina: true,
        }}
      />

      <Header />
      <Outlet />
      <footer>
        Copyright 2023 Michael Ikonomou
      </footer>
    </>
  );
}

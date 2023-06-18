"use client";
import "../../public/styles/globe.css";

import createGlobe from "cobe";
import { useEffect, useRef, MutableRefObject } from "react";

export default function GlobePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },

      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Location</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently based of the <b>San Francisco Bay Area</b>.
        </p>
      </div>
      <canvas
        ref={canvasRef}
        style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      />
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

interface DotGridProps {
  className?: string;
}

export default function DotGrid({ className = "" }: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const spacing = 12;
    const dotRadius = 0.8;

    interface Dot {
      x: number;
      y: number;
      opacity: number;
      targetOpacity: number;
      speed: number;
    }

    let dots: Dot[] = [];

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      dots = [];
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing,
            y: j * spacing,
            opacity: Math.random() * 0.5,
            targetOpacity: Math.random() * 0.6 + 0.1,
            speed: Math.random() * 0.02 + 0.008,
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        // Move toward target opacity
        if (Math.abs(dot.opacity - dot.targetOpacity) < 0.01) {
          // Pick new target
          dot.targetOpacity = Math.random() * 0.7 + 0.05;
          dot.speed = Math.random() * 0.02 + 0.008;
        }
        dot.opacity += (dot.targetOpacity - dot.opacity) * dot.speed;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${dot.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}

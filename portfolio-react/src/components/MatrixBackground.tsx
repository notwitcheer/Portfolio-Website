import { useEffect, useRef } from 'react';
import './MatrixBackground.css';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  fadeDirection: number;
  fadeSpeed: number;
}

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Star[] = [];
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1.5,
        opacity: Math.random(),
        fadeDirection: Math.random() > 0.5 ? 1 : -1,
        fadeSpeed: Math.random() * 0.01 + 0.005,
      });
    }

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.opacity += star.fadeDirection * star.fadeSpeed;

        if (star.opacity >= 1) {
          star.opacity = 1;
          star.fadeDirection = -1;
        } else if (star.opacity <= 0) {
          star.opacity = 0;
          star.fadeDirection = 1;
        }

        context.fillStyle = `rgba(230, 195, 92, ${star.opacity * 0.8})`;
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        context.fill();
      });
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      stars.forEach(star => {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="matrix-bg" />;
};

export default MatrixBackground;

import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
  type: 'triangle' | 'square' | 'hexagon';
}

export const GeometricShapes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Initialize shapes
    const shapeCount = 12;
    const types: Shape['type'][] = ['triangle', 'square', 'hexagon'];
    
    shapesRef.current = Array.from({ length: shapeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.005,
      size: Math.random() * 40 + 20,
      opacity: Math.random() * 0.08 + 0.02,
      type: types[Math.floor(Math.random() * types.length)],
    }));

    const drawShape = (shape: Shape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.strokeStyle = `rgba(255, 140, 0, ${shape.opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();

      switch (shape.type) {
        case 'triangle':
          const triSize = shape.size;
          ctx.moveTo(0, -triSize);
          ctx.lineTo(triSize * 0.866, triSize * 0.5);
          ctx.lineTo(-triSize * 0.866, triSize * 0.5);
          ctx.closePath();
          break;
        case 'square':
          const sqSize = shape.size * 0.7;
          ctx.rect(-sqSize, -sqSize, sqSize * 2, sqSize * 2);
          break;
        case 'hexagon':
          const hexSize = shape.size * 0.8;
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = hexSize * Math.cos(angle);
            const y = hexSize * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          break;
      }

      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapesRef.current.forEach((shape) => {
        // Update position and rotation
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        // Wrap around edges
        if (shape.x < -100) shape.x = canvas.width + 100;
        if (shape.x > canvas.width + 100) shape.x = -100;
        if (shape.y < -100) shape.y = canvas.height + 100;
        if (shape.y > canvas.height + 100) shape.y = -100;

        drawShape(shape);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

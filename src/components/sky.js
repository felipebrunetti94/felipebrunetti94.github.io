import * as React from "react";
class Star {
  constructor({ ctx, canvas }) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random() * 2;
    this.opacity = Math.random();
    this.speed = Math.random() * 0.05;
  }

  update() {
    this.y += this.speed;
    if (this.y > this.canvas.height) this.reset();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    this.ctx.fill();
  }
}

const Sky = () => {
  const canvasRef = React.useRef(null);
  const stars = React.useRef([]);
  const animationFrameId = React.useRef();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const createStars = () => {
      const numberOfStars = (window.innerWidth * window.innerHeight) / 500;
      stars.current = Array.from(
        { length: numberOfStars },
        () => new Star({ ctx, canvas })
      );
    };

    if (!animationFrameId.current) {
      createStars();
    }

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.current.forEach((star) => {
        star.update();
        star.draw();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    animate();

    const handleResize = () => {
      updateCanvasSize();
      createStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "auto",
        background: `linear-gradient(
          to bottom,
          #000428, 80%,
          #004e92
        )`,
      }}
    />
  );
};

export default Sky;

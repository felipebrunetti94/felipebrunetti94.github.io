import * as React from "react";

function resizeCanvas(canvas, context) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: dpr = 1 } = window;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    context.scale(dpr, dpr);
    return true;
  }
  return false;
}

const useCanvas = (createElements) => {
  const canvasRef = React.useRef(null);
  const animationFrameId = React.useRef();
  const elements = React.useRef([]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    if (!animationFrameId) {
      elements.current = createElements(canvas);
    }

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      elements.current.forEach((element) => {
        element.update();
        element.draw(context);
      });
      animationFrameId.current = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationFrameId.current)
        window.cancelAnimationFrame(animationFrameId.current);
    };
  }, [createElements]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const handleResize = () => {
      elements.current = createElements(canvas);
      resizeCanvas(canvas, context);
    };
    resizeCanvas(canvas, context);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [createElements]);

  return canvasRef;
};

const Canvas = ({ createElements, ...rest }) => {
  const canvasRef = useCanvas(createElements);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;

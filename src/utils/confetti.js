import confetti from "canvas-confetti";

export const celebrate = (origin = { x: 0.5, y: 0.6 }) => {
  confetti({
    particleCount: 80,
    spread: 70,
    startVelocity: 35,
    scalar: 0.9,
    origin,
    colors: ["#22c55e", "#4ade80", "#16a34a", "#bbf7d0", "#86efac"],
  });
};

export const celebrateBig = () => {
  const duration = 800;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#22c55e", "#4ade80", "#16a34a"],
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#22c55e", "#4ade80", "#16a34a"],
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
};

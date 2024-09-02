// Vec2 utility function
export const Vec2 = (x, y) => ({ x, y });

// Circle generator
export const Circle = (C, R = Math.random() * window.innerWidth / 50 + 9, M = 1 / R) => ({
  C,
  V: Vec2(0, 0),
  M,
  B: M ? Math.random() * 69 | 0 + 12 : 0,
  D: 0,
  R,
  Z: String.fromCodePoint(Math.random() * 0x45 | 0 + 0x1F600)
});

// Vector math utility functions
export const add = (x, y) => Vec2(x.x + y.x, x.y + y.y);
export const length = (x) => Math.sqrt(dot(x, x));
export const dot = (x, y) => x.x * y.x + x.y * y.y;
export const normalize = (x) => {
  const len = length(x);
  return Vec2(x.x / (len || 1), x.y / (len || 1));
};

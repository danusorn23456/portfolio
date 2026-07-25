module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix"],
  "*.{ts,tsx}": () => "npm run typecheck",
  "*.{js,jsx,ts,tsx,json,css,md}": ["prettier --write"],
};

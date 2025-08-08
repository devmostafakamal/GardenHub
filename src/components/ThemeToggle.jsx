import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDark(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <label className="flex cursor-pointer items-center gap-2">
      <span className="text-sm">🌞</span>
      <input
        type="checkbox"
        className="toggle"
        checked={isDark}
        onChange={handleToggle}
      />
      <span className="text-sm">🌙</span>
    </label>
  );
}

export default ThemeToggle;

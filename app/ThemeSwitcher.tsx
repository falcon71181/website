"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="text-[28px] cursor-pointer">
      {theme === "dark" ? (
        <FiSun
          className="text-heading_white"
          onClick={() => setTheme("light")}
        />
      ) : (
        <FiMoon className="text-black" onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default ThemeSwitcher;

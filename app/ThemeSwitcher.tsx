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
    <div className="ml-0 sm:ml-2 text-[22px] md:text-[24px] lg:text-[28px] cursor-pointer transition-all duration-500">
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

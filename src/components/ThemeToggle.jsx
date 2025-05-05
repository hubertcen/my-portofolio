import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [DarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    if (DarkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme}>
      {" "}
      {DarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-800" />
      )}
    </button>
  );
};

import { useState } from 'react';

const ModeToggle = ({ className }: { className?: string }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleMode}
      className={`${className} p-2 bg-gray-300 rounded-full`}
    >
      {isDarkMode ? '🌙 Dark Mode' : '🌞 Light Mode'}
    </button>
  );
};
export { ModeToggle };

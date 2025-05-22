import { useTheme } from '@app/hooks/useTheme';
import './theme-toggle.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="mode-toggle">
      <span className={`theme-label ${isDark ? 'active' : ''}`}>Dark</span>
      <button
        onClick={toggleTheme}
        className="toggle-switch"
        role="switch"
        aria-checked={isDark}
        aria-label="Przełącz motyw"
      />
      <span className={`theme-label ${!isDark ? 'active' : ''}`}>Light</span>
    </div>
  );
}

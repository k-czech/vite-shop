import { useTheme } from '@app/hooks/useTheme';
import './theme-toggle.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="mode-toggle">
      <h6 style={{ opacity: isDark ? 1 : 0.5 }}>Dark</h6>
      <button onClick={toggleTheme} className="toggle-switch" role="switch" aria-checked={isDark} />
      <h6 style={{ opacity: isDark ? 0.5 : 1 }}>Light</h6>
    </div>
  );
}

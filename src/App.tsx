import { Home } from '@app/pages/Home';
import { useTheme } from '@app/hooks/useTheme';
import '@styles/globals.css';

function App() {
  // Initialize theme
  useTheme();

  return (
    <div className="bg-background text-foreground min-h-screen w-full">
      <Home />
    </div>
  );
}

export default App;

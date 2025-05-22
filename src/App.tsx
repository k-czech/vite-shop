import { useTheme } from '@app/hooks/useTheme';
import { MainContent } from '@app/routes';
import '@styles/globals.css';

function App() {
  useTheme();

  return (
    <div className="bg-background text-foreground min-h-screen w-full">
      <MainContent />
    </div>
  );
}

export default App;

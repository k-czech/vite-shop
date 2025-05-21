import { useEffect, useState } from 'react';
import { Shop } from '@app/types/Shop';
import { getShops } from '@api/shops';
import { ShopList } from '@app/components/ShopList/ShopList';
import { ThemeToggle } from '@app/components/ui/ThemeToggle';

export function Home() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadShops() {
      try {
        const data = await getShops();
        setShops(data);
        setError(null);
      } catch (err) {
        setError('Nie udało się załadować listy sklepów. Spróbuj ponownie później.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadShops();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="border-primary h-12 w-12 animate-spin rounded-full border-t-2 border-b-2" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-destructive">{error}</div>
      </div>
    );
  }

  return (
    <main className="flex h-screen w-full flex-col">
      <div className="flex-none p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-foreground !text-3xl font-bold">Nasze Sklepy</h1>
          <ThemeToggle />
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <ShopList shops={shops} />
      </div>
    </main>
  );
}

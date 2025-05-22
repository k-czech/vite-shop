import { ShopListItem } from './ShopListItem';
import { Shop } from '@app/types/Shop';
import { memo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

type ShopListProps = {
  shops: Shop[];
};

export const ShopList = memo(function ShopList({ shops }: ShopListProps) {
  if (!Array.isArray(shops)) {
    console.error('shops is not an array:', shops);
    return null;
  }

  if (shops.length === 0) {
    return (
      <div className="text-muted-foreground flex flex-col items-center justify-center p-8">
        <p className="text-xl">Nie znaleziono sklepów</p>
        <p className="mt-2">Spróbuj zmienić kryteria wyszukiwania</p>
      </div>
    );
  }

  const rowRenderer = ({ index, style }: ListChildComponentProps) => {
    const shop = shops[index];
    return (
      <div style={style}>
        <ShopListItem shop={shop} />
      </div>
    );
  };

  return (
    <div className="bg-card w-full rounded-lg shadow">
      <div className="border-border bg-muted text-muted-foreground hidden w-full gap-4 md:flex md:flex-row md:items-center md:border-b md:px-4 md:py-3 md:text-sm md:font-medium">
        <div style={{ width: '30px' }}>ID</div>
        <div style={{ flex: 1 }}>Nazwa</div>
        <div style={{ flex: 1 }}>Adres</div>
        <div style={{ width: '100px' }}>Typ</div>
        <div style={{ width: '52px' }}></div>
      </div>

      <div style={{ height: 'calc(100vh - 200px)', width: '100%' }}>
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              width={width}
              height={height}
              itemCount={shops.length}
              itemSize={160}
              overscanCount={3}
            >
              {rowRenderer}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
    </div>
  );
});

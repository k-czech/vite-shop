import { memo } from 'react';
import { Shop } from '@app/types/Shop';
import { getParsedAddress } from '@app/utils/addressCache';
import { ImageWithFallback } from '@app/components/ShopList/ImageWithFallback';
import { ShopBadge } from '@app/components/ShopList/ShopBadge';
import { Star, Tag, MapPin, Heart } from 'lucide-react';

interface ShopListItemProps {
  shop: Shop;
}

export const ShopListItem = memo(function ShopListItem({ shop }: ShopListItemProps) {
  if (!shop || typeof shop !== 'object') {
    console.error('Invalid shop data:', shop);
    return null;
  }

  const { street, city } = getParsedAddress(shop.address);
  const address = `${street}, ${city}`;

  return (
    <div className="border-border hover:bg-muted flex w-full flex-col p-3 transition-colors md:flex-row md:items-center md:p-4">
      {/* Mobile: Top section with image and main info */}
      <div className="flex items-center gap-4 md:w-[calc(80px+40%)]">
        <div className="md:min-w-[30px]">
          <span className="text-muted-foreground">{shop.id}</span>
        </div>
        {/* Image container */}
        <div className="relative">
          <ImageWithFallback
            src={shop.imageUrl}
            alt={`${shop.name} store front`}
            className="max-h-[64px] max-w-[64px] rounded-full"
            width={64}
            height={64}
          />
          <div
            className="border-background absolute right-1 bottom-0 h-3 w-3 rounded-full border-2 bg-green-500"
            role="status"
            aria-label="Sklep aktywny"
          />
        </div>

        {/* Main info */}
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <h3 className="text-foreground truncate text-lg font-bold">{shop.name}</h3>
          </div>

          {/* Status Badge */}
          <ShopBadge type={shop.type} className="md:hidden" />

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-muted-foreground">4.5</span>
            <span className="text-muted-foreground/60">(423 opinie)</span>
          </div>

          {/* Price range */}
          <div className="flex items-center gap-1 text-sm">
            <Tag className="h-4 w-4 text-green-600" />
            <span className="text-muted-foreground">Cena od 10 zł do 95 zł</span>
          </div>

          {/* Address - mobile only */}
          <div className="flex items-center gap-1 text-sm md:hidden">
            <MapPin className="h-4 w-4 text-red-500" />
            <span className="text-muted-foreground truncate">{address}</span>
          </div>
        </div>
      </div>

      {/* Desktop only content */}
      <div className="hidden md:flex md:flex-1 md:items-center md:gap-4">
        {/* Address */}
        <div className="min-w-0 flex-1">
          <span className="text-muted-foreground block truncate text-sm">{address}</span>
        </div>

        {/* Status Badge */}
        <ShopBadge type={shop.type} />

        {/* Actions */}
        <div className="flex w-[52px] flex-shrink-0 justify-center">
          <button
            className="text-muted-foreground/60 hover:bg-muted rounded-full p-2 transition-colors hover:text-yellow-500"
            aria-label="Dodaj do ulubionych"
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
});

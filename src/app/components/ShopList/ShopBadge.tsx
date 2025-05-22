import { memo } from 'react';
import { ShopType } from '@app/types/Shop';

type ShopBadgeProps = {
  type: ShopType;
  className?: string;
};

export const ShopBadge = memo(function ShopBadge({ type, className }: ShopBadgeProps) {
  const badgeClasses =
    type === 'FRANCHISE' ? 'bg-blue-900 text-blue-300' : 'bg-gray-700 text-gray-300';

  return (
    <span
      className={`w-fit min-w-[100px] rounded-full px-1.5 py-1 text-center text-xs font-medium ${badgeClasses} ${className}`}
      role="status"
      aria-label={`Shop type: ${type}`}
    >
      {type}
    </span>
  );
});

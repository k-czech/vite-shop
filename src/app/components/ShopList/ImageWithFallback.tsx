import { memo } from 'react';
import { useImage } from '@app/hooks/useImage';
import { Skeleton } from '@app/components/ui/Skeleton';

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export const ImageWithFallback = memo(function ImageWithFallback({
  src,
  alt,
  className = '',
  width = 64,
  height = 64,
}: ImageWithFallbackProps) {
  const { isLoading, hasError, imageSrc } = useImage({ src });

  if (hasError) {
    return (
      <div
        className={`bg-muted flex items-center justify-center ${className}`}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
        style={{ width, height }}
      >
        <span className="text-muted-foreground text-xs">Failed to load image</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <Skeleton className={`rounded-full ${className}`} width={width} height={height} />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={`rounded-full object-cover transition-opacity duration-300 ${className} ${
            isLoading ? 'hidden' : ''
          }`}
          loading="lazy"
        />
      )}
    </>
  );
});

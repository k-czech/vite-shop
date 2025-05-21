import { useState, useEffect } from "react";

interface UseImageProps {
  src: string;
  onLoad?: () => void;
  onError?: () => void;
}

interface UseImageReturn {
  isLoading: boolean;
  hasError: boolean;
  imageSrc: string | null;
}

export function useImage({
  src,
  onLoad,
  onError,
}: UseImageProps): UseImageReturn {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoading(false);
      setImageSrc(src);
      onLoad?.();
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
      setImageSrc(null);
      onError?.();
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError]);

  return { isLoading, hasError, imageSrc };
}

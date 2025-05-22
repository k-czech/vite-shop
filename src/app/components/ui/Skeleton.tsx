type SkeletonProps = {
  className?: string;
  width?: string | number;
  height?: string | number;
};

export function Skeleton({ className = '', width = '100%', height = '1rem' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded bg-gray-200 dark:bg-gray-700 ${className}`}
      style={{ width, height }}
      data-testid="skeleton"
    />
  );
}

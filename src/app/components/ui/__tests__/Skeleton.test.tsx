import { describe, it, expect } from 'vitest';
import { render } from '../../../../test-utils';
import { Skeleton } from '../Skeleton';
import '@testing-library/jest-dom';

describe('Skeleton', () => {
  it('renders with default props', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton).toHaveClass('animate-pulse', 'rounded', 'bg-gray-200', 'dark:bg-gray-700');
    expect(skeleton).toHaveStyle({ width: '100%', height: '1rem' });
  });

  it('renders with custom dimensions', () => {
    const { container } = render(<Skeleton width="200px" height="50px" />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton).toHaveStyle({ width: '200px', height: '50px' });
  });

  it('renders with custom className', () => {
    const { container } = render(<Skeleton className="custom-class" />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton).toHaveClass(
      'custom-class',
      'animate-pulse',
      'rounded',
      'bg-gray-200',
      'dark:bg-gray-700'
    );
  });
});

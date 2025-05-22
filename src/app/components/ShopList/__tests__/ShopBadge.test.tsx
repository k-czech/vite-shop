import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../../test-utils';
import { ShopBadge } from '../ShopBadge';
import '@testing-library/jest-dom';

describe('ShopBadge', () => {
  it('renders REGULAR type correctly', () => {
    render(<ShopBadge type="REGULAR" />);
    const badge = screen.getByRole('status');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-gray-700', 'text-gray-300');
    expect(badge).toHaveTextContent('REGULAR');
  });

  it('renders FRANCHISE type correctly', () => {
    render(<ShopBadge type="FRANCHISE" />);
    const badge = screen.getByRole('status');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-blue-900', 'text-blue-300');
    expect(badge).toHaveTextContent('FRANCHISE');
  });

  it('accepts custom className', () => {
    render(<ShopBadge type="REGULAR" className="custom-class" />);
    const badge = screen.getByRole('status');
    expect(badge).toHaveClass('custom-class');
  });
});

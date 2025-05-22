import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../../../test-utils';
import { ShopList } from '../ShopList';
import { Shop } from '@app/types/Shop';
import '@testing-library/jest-dom';

vi.mock('react-virtualized-auto-sizer', () => ({
  default: ({ children }: any) => children({ width: 1000, height: 500 }),
}));

vi.mock('react-window', () => ({
  FixedSizeList: ({ children, itemCount }: any) => (
    <div data-testid="virtual-list" style={{ height: '500px', width: '1000px' }}>
      {Array.from({ length: itemCount }).map((_, index) => (
        <div key={index} data-testid="list-item">
          {children({ index, style: {} })}
        </div>
      ))}
    </div>
  ),
}));

vi.mock('@app/utils/addressCache', () => ({
  getParsedAddress: vi.fn().mockReturnValue({
    street: 'Test Street',
    city: 'Test City',
  }),
}));

vi.mock('@app/hooks/useImage', () => ({
  useImage: vi.fn().mockReturnValue({
    isLoading: false,
    hasError: false,
    imageSrc: 'https://example.com/image.jpg',
  }),
}));

const mockShops: Shop[] = [
  {
    id: 'shop-1',
    name: 'Test Shop 1',
    address: 'Test Address 1',
    type: 'REGULAR',
    imageUrl: 'https://example.com/image1.jpg',
  },
  {
    id: 'shop-2',
    name: 'Test Shop 2',
    address: 'Test Address 2',
    type: 'FRANCHISE',
    imageUrl: 'https://example.com/image2.jpg',
  },
];

describe('ShopList', () => {
  it('renders list headers', () => {
    render(<ShopList shops={mockShops} />);
    const headers = screen.getByText('ID').parentElement;
    expect(headers).toBeInTheDocument();
    expect(headers).toHaveTextContent('ID');
    expect(headers).toHaveTextContent('Nazwa');
    expect(headers).toHaveTextContent('Adres');
    expect(headers).toHaveTextContent('Typ');
  });

  it('displays empty state when no shops are provided', () => {
    render(<ShopList shops={[]} />);
    expect(screen.getByText('Nie znaleziono sklepów')).toBeInTheDocument();
    expect(screen.getByText('Spróbuj zmienić kryteria wyszukiwania')).toBeInTheDocument();
  });

  it('handles invalid input gracefully', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<ShopList shops={null as any} />);
    expect(consoleErrorSpy).toHaveBeenCalledWith('shops is not an array:', null);
    consoleErrorSpy.mockRestore();
  });

  it('renders virtual list with correct dimensions', () => {
    render(<ShopList shops={mockShops} />);
    const listContainer = screen.getByTestId('virtual-list');
    expect(listContainer).toBeInTheDocument();
    expect(listContainer).toHaveStyle({
      height: '500px',
      width: '1000px',
    });

    const listItems = screen.getAllByTestId('list-item');
    expect(listItems).toHaveLength(mockShops.length);
  });
});

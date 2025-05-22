import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../../../test-utils';
import { ShopListItem } from '../ShopListItem';
import { Shop } from '@app/types/Shop';
import '@testing-library/jest-dom';

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

const mockShop: Shop = {
  id: 'shop-1',
  name: 'Test Shop',
  address: 'Test Address',
  type: 'REGULAR',
  imageUrl: 'https://example.com/image.jpg',
};

describe('ShopListItem', () => {
  it('renders shop details correctly', () => {
    render(<ShopListItem shop={mockShop} />);

    expect(screen.getByText('Test Shop')).toBeInTheDocument();
    expect(screen.getByText('shop-1')).toBeInTheDocument();
    expect(screen.getAllByText('Test Street, Test City')).toHaveLength(2);

    expect(screen.getByLabelText('Sklep aktywny')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText('(423 opinie)')).toBeInTheDocument();
    expect(screen.getByText('Cena od 10 zł do 95 zł')).toBeInTheDocument();
  });

  it('renders shop image correctly', () => {
    render(<ShopListItem shop={mockShop} />);
    const image = screen.getByRole('img', { name: `${mockShop.name} store front` });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockShop.imageUrl);
    expect(image).toHaveClass('max-h-[64px]', 'max-w-[64px]', 'rounded-full');
  });

  it('renders favorite button', () => {
    render(<ShopListItem shop={mockShop} />);
    const favoriteButton = screen.getByLabelText('Dodaj do ulubionych');
    expect(favoriteButton).toBeInTheDocument();
  });

  it('renders shop badge', () => {
    render(<ShopListItem shop={mockShop} />);
    const badges = screen.getAllByRole('status', { name: `Shop type: ${mockShop.type}` });
    expect(badges).toHaveLength(2);
    badges.forEach((badge) => {
      expect(badge).toHaveTextContent(mockShop.type);
      expect(badge).toHaveClass('bg-gray-700', 'text-gray-300');
    });
  });
});

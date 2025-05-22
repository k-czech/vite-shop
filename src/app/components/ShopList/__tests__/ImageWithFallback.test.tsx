import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../../../test-utils';
import { ImageWithFallback } from '../ImageWithFallback';
import '@testing-library/jest-dom';
import { useImage } from '../../../hooks/useImage';

vi.mock('../../../hooks/useImage', () => ({
  useImage: vi.fn().mockImplementation(({ src }) => ({
    isLoading: false,
    hasError: false,
    imageSrc: src,
  })),
}));

describe('ImageWithFallback', () => {
  it('renders image successfully', () => {
    render(
      <ImageWithFallback
        src="https://example.com/image.jpg"
        alt="Test image"
        width={100}
        height={100}
      />
    );

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
    expect(image).toHaveClass('rounded-full', 'object-cover');
  });

  it('shows loading state', () => {
    vi.mocked(useImage).mockImplementationOnce(() => ({
      isLoading: true,
      hasError: false,
      imageSrc: '',
    }));

    render(
      <ImageWithFallback
        src="https://example.com/image.jpg"
        alt="Test image"
        width={100}
        height={100}
      />
    );

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('rounded-full');
  });

  it('shows error state', () => {
    vi.mocked(useImage).mockImplementationOnce(() => ({
      isLoading: false,
      hasError: true,
      imageSrc: '',
    }));

    render(<ImageWithFallback src="invalid-url" alt="Test image" width={100} height={100} />);

    const errorContainer = screen.getByRole('img');
    expect(errorContainer).toBeInTheDocument();
    expect(errorContainer).toHaveAttribute('aria-label', 'Failed to load image: Test image');
    expect(screen.getByText('Failed to load image')).toBeInTheDocument();
  });
});

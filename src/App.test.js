import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import useGetProducts from './hooks/useGetProducts';

jest.mock('./hooks/useGetProducts');

const mockProducts = [
  {
    id: 101,
    title: 'Test Flower',
    price: 50,
    description: 'Test description',
    images: ['https://example.com/test-flower.jpg'],
    quantity: 1,
  },
];

const mockHookResponse = () => {
  // Keep tests deterministic by avoiding real network requests.
  useGetProducts.mockReturnValue({
    products: mockProducts,
    loading: false,
    error: '',
    reload: jest.fn(),
  });
};

describe('App basic flows', () => {
  beforeEach(() => {
    mockHookResponse();
  });

  afterEach(() => {
    jest.clearAllMocks();
    window.history.pushState({}, '', '/');
  });

  test('renders products on home view', () => {
    render(<App />);

    expect(screen.getByText('Test Flower')).toBeInTheDocument();
  });

  test('adds and removes items from cart', () => {
    render(<App />);

    // Add one item to the cart from the product card.
    fireEvent.click(screen.getByAltText('add to cart'));
    expect(screen.getByText('1')).toBeInTheDocument();

    // Open the cart panel and remove the item.
    fireEvent.click(screen.getByAltText('shopping cart'));
    expect(screen.getByAltText('close')).toBeInTheDocument();
    fireEvent.click(screen.getByAltText('close'));

    // Confirm the cart panel returns to its empty state after removal.
    expect(
      screen.getByText('Your cart is empty. Add products to continue.')
    ).toBeInTheDocument();
  });

  test('renders not found page on unknown route', () => {
    window.history.pushState({}, '', '/unknown-route');
    render(<App />);

    expect(screen.getByText(/Not Found Error 404/i)).toBeInTheDocument();
  });
});

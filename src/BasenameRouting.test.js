import { render, screen } from '@testing-library/react';
import App from './App';
import useGetProducts from './hooks/useGetProducts';

jest.mock('./hooks/useGetProducts');

const originalPublicUrl = process.env.PUBLIC_URL;

const mockCatalogReady = () => {
  // Keep route assertions isolated from network or data-loading behavior.
  useGetProducts.mockReturnValue({
    products: [],
    loading: false,
    error: '',
    reload: jest.fn(),
  });
};

describe('Routing with /FarmLabs basename', () => {
  beforeAll(() => {
    process.env.PUBLIC_URL = '/FarmLabs';
  });

  afterAll(() => {
    process.env.PUBLIC_URL = originalPublicUrl;
  });

  beforeEach(() => {
    mockCatalogReady();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('resolves login route under /FarmLabs', () => {
    window.history.pushState({}, '', '/FarmLabs/login');
    render(<App />);

    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
  });

  test('resolves orders route under /FarmLabs', () => {
    window.history.pushState({}, '', '/FarmLabs/orders');
    render(<App />);

    expect(screen.getByText('My Orders')).toBeInTheDocument();
  });

  test('renders 404 for unknown route under /FarmLabs', () => {
    window.history.pushState({}, '', '/FarmLabs/unknown-path');
    render(<App />);

    expect(screen.getByText(/Not Found Error 404/i)).toBeInTheDocument();
  });
});

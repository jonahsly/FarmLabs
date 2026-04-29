import '@testing-library/jest-dom';

// Mock axios globally to avoid ESM parsing issues inside Jest.
jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

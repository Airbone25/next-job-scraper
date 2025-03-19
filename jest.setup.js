import '@testing-library/jest-dom';
<<<<<<< HEAD
=======

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} alt={props.alt || 'mocked-image'} />;
  },
}));

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, ...props }) => <a {...props}>{children}</a>,
}));
>>>>>>> f7c69cd8c6792c17fc0e04ee6f2d787f46c958a8

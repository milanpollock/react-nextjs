import React from 'react';
import { render } from '@testing-library/react';

import NotFoundPage from '../../pages/404';

// Manually mock next/dynamic as the next.js (7.0.2) babel plugin will compile to Webpack
// lazy imports (require.resolveWeak) who're conflicting with the Node module system.
// TODO: Move this globally!!!
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});

describe('404.tsx', () => {
  it('renders without crashing', () => {
    render(<NotFoundPage />);
  });
});

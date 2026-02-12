import { ErrorBoundary } from 'react-error-boundary';

import { MainErrorFallback } from '../components/errors/Main';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      {children}
    </ErrorBoundary>
  );
};

import ErrorBoundary from "components/error/ErrorBoundary";
import { AppProviders, ThemeContextProvider } from "components/providers";
import AppRoutes from "routes";
function App() {
  return (
    <ErrorBoundary>
      <ThemeContextProvider>
        <AppProviders>
          <AppRoutes />
        </AppProviders>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}

export default App;

import { SearchProvider } from "./context/SearchContext";
import ThemeContextProvider from "./context/ThemeContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
        <ThemeContextProvider>
        <SearchProvider>
          <AppRouter />
        </SearchProvider>
        </ThemeContextProvider>
    </div>
  );
}

export default App;

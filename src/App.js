import ThemeContextProvider from "./context/ThemeContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
        <ThemeContextProvider>
          <AppRouter />
        </ThemeContextProvider>
    </div>
  );
}

export default App;

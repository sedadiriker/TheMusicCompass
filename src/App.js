import { Provider } from "react-redux";
import { SearchProvider } from "./context/SearchContext";
import ThemeContextProvider from "./context/ThemeContextProvider";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import store from "./app/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeContextProvider>
        <SearchProvider>
          <AppRouter />
        </SearchProvider>
        <ToastContainer />
        </ThemeContextProvider>
        </Provider>
    </div>
  );
}

export default App;

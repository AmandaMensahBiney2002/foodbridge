import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { AlertProvider } from "./components/AlertContext";

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <ScrollToTop />
        <AppRoutes />
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
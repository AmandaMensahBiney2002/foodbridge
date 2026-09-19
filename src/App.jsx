import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
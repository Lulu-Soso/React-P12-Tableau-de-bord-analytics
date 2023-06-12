import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/:userId" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;

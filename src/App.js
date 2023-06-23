import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import PreLoader from "./components/PreLoader";
import React, {useEffect, useState} from "react";

const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const simulateLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setContentLoaded(true);
    };

    simulateLoading();

    // Nettoyage de l'effet
    return () => {
    };
  }, []);

  const HomePage = React.lazy(() => import('./pages/Home'));
  const DashboardPage = React.lazy(() => import('./pages/Dashboard'));
  const NotFoundPage = React.lazy(() => import('./pages/NotFound'));

  return (
      <BrowserRouter>
        {!contentLoaded && <PreLoader/>}
        <React.Suspense fallback={<PreLoader/>}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/dashboard/:userId" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </React.Suspense>
      </BrowserRouter>
  );
};

export default App;

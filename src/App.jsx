import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesProvider } from "./contexts/MoviesContext";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import DefaultLayout from "./layout/DefaultLayout";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/movies/:id" element={<DetailsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </>
  );
}

export default App;

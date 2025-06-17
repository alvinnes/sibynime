import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AnimePopularPage from "./pages/AnimePopularPage";
import AnimeOngoingPage from "./pages/AnimeOngoingPage";
import AnimeEndPage from "./pages/AnimeEndPage";
import AnimeGenresPage from "./pages/AnimeGenresPage";
import DetailAnimeGenres from "./pages/DetailAnimeGenres";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animePopular" element={<AnimePopularPage />} />
        <Route path="/animeOngoing" element={<AnimeOngoingPage />} />
        <Route path="animeEnd" element={<AnimeEndPage />} />
        <Route path="/animeGenres" element={<AnimeGenresPage />} />
        <Route path="/animeGenres/:id/:name" element={<DetailAnimeGenres />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

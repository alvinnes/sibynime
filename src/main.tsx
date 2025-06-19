import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AnimePopularPage from "./pages/AnimePopularPage";
import AnimeOngoingPage from "./pages/AnimeOngoingPage";
import AnimeEndPage from "./pages/AnimeEndPage";
import AnimeGenresPage from "./pages/AnimeGenresPage";
import DetailAnimeGenres from "./pages/DetailAnimeGenres";
import AnimeSchedule from "./pages/AnimeSchedule";
import AnimeSearch from "./pages/AnimeSearch";
import ScrollToTop from "./components/UI/ScrollToTop";
import AnimeMoviePage from "./pages/AnimeMoviePage";
import AnimeUpcomingPage from "./pages/AnimeUpcomingPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animePopular" element={<AnimePopularPage />} />
        <Route path="/animeOngoing" element={<AnimeOngoingPage />} />
        <Route path="animeEnd" element={<AnimeEndPage />} />
        <Route path="/animeGenres" element={<AnimeGenresPage />} />
        <Route path="/animeGenres/:id/:name" element={<DetailAnimeGenres />} />
        <Route path="/animeJadwal" element={<AnimeSchedule />} />
        <Route path="/searchAnime/:name" element={<AnimeSearch />} />
        <Route path="/animeMovie" element={<AnimeMoviePage />} />
        <Route path="/animeUpcoming" element={<AnimeUpcomingPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

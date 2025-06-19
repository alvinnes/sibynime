import Navbar from "../components/Navbar/Navbar";
import HighlightAnimeEnd from "../components/SectionHomePage/HighlightAnimeEnd";
import HighlightAnimePopular from "../components/SectionHomePage/HighlightAnimePopular";
import HighlightAnimeOngoing from "../components/SectionHomePage/HighlightAnimeOngoing";
import HighlightAnimeMovie from "../components/SectionHomePage/HighlightAnimeMovie";

const HomePage = () => {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <HighlightAnimeOngoing />
      <HighlightAnimePopular />
      <HighlightAnimeEnd />
      <HighlightAnimeMovie />
    </main>
  );
};

export default HomePage;

import type { ReactNode } from "react";
import LoaderAnimePopular from "../AnimePopular/LoaderAnimePopular";
import Navbar from "../Navbar/Navbar";
import useIsLoading from "../../stores/useIsLoading";

interface AnimeLayoutsProps {
  text: string;
  children: ReactNode;
}

const AnimeLayouts = ({ text, children }: AnimeLayoutsProps) => {
  const isLoading = useIsLoading((state) => state.isLoading);
  return (
    <main className="flex w-full justify-center">
      <Navbar />
      <section className="flex w-full flex-col items-center pt-40 pb-20">
        <LoaderAnimePopular />
        <h2
          className={`${isLoading && "hidden"} bg-primary mb-15 ml-2 self-start rounded-2xl px-4 py-3 text-2xl font-semibold text-white sm:mb-20 sm:ml-16`}
        >
          {text}
        </h2>
        {children}
      </section>
    </main>
  );
};

export default AnimeLayouts;

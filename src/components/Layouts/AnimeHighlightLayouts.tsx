import { forwardRef, type ReactNode } from "react";
import useIsLoading from "../../stores/useIsLoading";
import { Link } from "react-router";
import { Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

interface AnimeHighlightLayoutsProps {
  children: ReactNode;
  title: string;
  link: string;
  spacing?: string;
}

const AnimeHighlightLayouts = forwardRef<
  HTMLElement,
  AnimeHighlightLayoutsProps
>(({ children, title, link, spacing }, ref) => {
  const isLoading = useIsLoading((state) => state.isLoading);
  return (
    <section
      ref={ref}
      className={`flex w-full flex-col items-center ${spacing} pb-10`}
    >
      <div
        className={`${isLoading ? "hidden" : "flex"} mb-12 w-11/12 items-center justify-between`}
      >
        <h2 className="bg-primary self-start rounded-2xl px-2 py-3 text-xl font-semibold text-white sm:px-4 sm:text-2xl">
          {title}
        </h2>
        <h3 className="self-start rounded-2xl bg-indigo-800 p-3 text-[0.8em] font-semibold text-white sm:text-base">
          <Link to={link}>Lihat Semua</Link>
        </h3>
      </div>
      <div className="flex w-11/12 justify-center">
        <Swiper
          watchSlidesProgress={true}
          freeMode={{ enabled: true, sticky: true, minimumVelocity: 0.05 }}
          modules={[FreeMode]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 38,
            },
          }}
        >
          {children}
        </Swiper>
      </div>
    </section>
  );
});

export default AnimeHighlightLayouts;

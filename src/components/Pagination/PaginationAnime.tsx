import { ArrowArcLeftIcon, ArrowArcRightIcon } from "@phosphor-icons/react";
import type { DataPagination } from "../../interfaces/DataPagination";
import useIsLoading from "../../stores/useIsLoading";

interface PaginationAnimeProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  dataPagination: DataPagination | undefined;
}

const PaginationAnime = (props: PaginationAnimeProps) => {
  const { setPage, page, dataPagination } = props;
  const isLoading = useIsLoading((state) => state.isLoading);

  const handleNextPage = () => {
    if (page > dataPagination!.last_visible_page - 1) return;
    setPage(page + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (page < 2) return;
    setPage(page - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`${isLoading && "hidden"} mx-auto mt-8 flex items-center gap-4 text-white`}
    >
      <button
        onClick={handlePrevPage}
        disabled={page < 2}
        className={`${page < 2 ? "cursor-not-allowed bg-indigo-800" : "cursor-pointer bg-indigo-500"} rounded-sm p-2`}
      >
        <ArrowArcLeftIcon size={23} />
      </button>
      <p>
        {page} Dari {dataPagination?.last_visible_page}
      </p>
      <button
        onClick={handleNextPage}
        className={`${page > dataPagination!.last_visible_page ? "cursor-not-allowed bg-indigo-800" : "cursor-pointer bg-indigo-500"} rounded-sm p-2`}
      >
        <ArrowArcRightIcon size={23} />
      </button>
    </div>
  );
};

export default PaginationAnime;

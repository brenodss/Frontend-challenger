import LeaderboardItem from "./Components/TableItem";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFilterContext } from "../../../../TableContext/Context";

export const TokenTable = () => {
  const {
    data,
    currentPage,
    totalPages,
    itemsPerPage,
    goToPage,
    changeItemsPerPage,
    Headers,
  } = useFilterContext();

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, data.length);

  return (
    <div className="min-h-[700px]">

      <LeaderboardItem />

      <div className="w-full flex flex-row justify-between items-center mt-4">
        <div>
          <p className="text-gray-400 text-sm">
            Showing {startItem}-{endItem} of {data.length}
          </p>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <div className="bg-violet-500 p-2">
              <ChevronLeft strokeWidth={3} className="w-5 h-5 text-white cursor-pointer" />
            </div>
          </button>

          <div className="space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-4 py-1.5 ${currentPage === page
                  ? "bg-primary text-white"
                  : "bg-tertiary/5 text-gray-400 hover:bg-primary hover:text-white"
                  } cursor-pointer transition-colors duration-300`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <div className="bg-violet-500 p-2">
              <ChevronRight strokeWidth={3} className="w-5 h-5 text-white cursor-pointer" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
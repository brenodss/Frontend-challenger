import { useState } from "react";
import { Menu, SlidersHorizontal, X } from "lucide-react";
import { SearchBar } from "./Searchbar";

export const Header = () => {
  return (
    <div className="flex items-center justify-between mb-8 px-4 md:px-0">
      <div className="text-2xl font-bold text-white">POTION LEADERBOARD</div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-800 rounded-lg md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = ["Traders", "Groups", "Daily", "Weekly", "Monthly", "All-Time"];
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 px-4 md:px-0">
      <div className="flex flex-wrap gap-2 md:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2.5 rounded-full hover:bg-tertiary/5 ${activeTab === tab
              ? "bg-primary text-white border-2 border-gray-200/15"
              : ""
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex w-full md:w-1/3 mt-4 md:mt-0 flex-row gap-x-1.5 items-center justify-between md:justify-end">
        <SearchBar />

        <div className="relative">
          <button
            onClick={() => setIsFiltersOpen(true)}
            className="bg-primary border-2 border-gray-200/15 w-fit px-4 py-2.5 rounded-full"
          >
            <SlidersHorizontal className="text-white w-5 h-5" />
          </button>
          <div className="absolute -bottom-1 -right-1 bg-purple-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </div>
        </div>
      </div>

      {isFiltersOpen && (
        <div
          className="fixed inset-0 bg-black/60 bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsFiltersOpen(false)}
        >
          <div
            className="bg-secondary/55 backdrop-blur-sm p-6 rounded-lg w-80 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsFiltersOpen(false)}
              className="absolute top-3 right-3 text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-white text-lg font-semibold mb-4">
              Filters Options
            </h2>

            <div className="space-y-3">
              <label className="text-gray-300 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-5 w-5 appearance-none border border-gray-400 rounded-md checked:bg-primary checked:border-transparent focus:outline-none relative
                  before:content-['✖'] before:text-sm before:absolute before:text-white before:font-bold before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 checked:before:opacity-100"
                />
                Show only top traders
              </label>
              <label className="text-gray-300 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-5 w-5 appearance-none border border-gray-400 rounded-md checked:bg-primary checked:border-transparent focus:outline-none relative
                  before:content-['✖'] before:text-sm before:absolute before:text-white before:font-bold before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 checked:before:opacity-100"
                />
                Include inactive users
              </label>
              <label className="text-gray-300 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-5 w-5 appearance-none border border-gray-400 rounded-md checked:bg-primary checked:border-transparent focus:outline-none relative
                  before:content-['✖'] before:text-sm before:absolute before:text-white before:font-bold before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 checked:before:opacity-100"
                />
                Show performance graphs
              </label>
            </div>


            <button
              onClick={() => setIsFiltersOpen(false)}
              className="w-full bg-primary text-white py-2 mt-4 rounded-lg"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

import { Search } from 'lucide-react';

export const SearchBar = () => (
  <div className="relative w-full min-w-[264px]">
    <input
      type="text"
      placeholder="Search by name or wallet"
      className="
      transition-colors duration-200
      w-full px-4 py-2.5 rounded-full border-2 border-gray-200/15 focus:outline-none focus:border-purple-600"
    />
    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
  </div>
);

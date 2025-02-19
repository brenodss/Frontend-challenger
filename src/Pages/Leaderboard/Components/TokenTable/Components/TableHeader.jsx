import { useFilterContext } from "../../../../../TableContext/Context";
import { ChevronDown, ChevronUp } from 'lucide-react';

const TableHeader = () => {
    const { Headers } = useFilterContext();

    return (
      <thead>
        <tr className="bg-primary">
          {Headers.map((header) => {

            return (
              <th 
                key={header.field} 
                className={`text-nowrap py-4 cursor-pointer ${header.className}`}
                
              >
                <span className="select-none pointer-events-none">{header.title}</span>
                <ChevronDown strokeWidth={3} className="inline-block ml-2 text-pink-700" />

              </th>
            );
          })}
        </tr>
      </thead>
    );
};

export default TableHeader;

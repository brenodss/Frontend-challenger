import { useFilterContext } from "../../../../../Context/TableContext/Context";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useModalContext } from "../../../../../Context/ModalContext/ModalContext";

const TableHeader = () => {
    const { Headers, handleSort, sortField, sortDirection } = useFilterContext();
    const { openModal } = useModalContext();

    return (
        <thead>
            <tr className="bg-primary">
                {Headers.map((header) => {
                    const isSortable = header.sortable !== false; // Campos sem `sortable: false` são ordenáveis
                    const isActive = sortField === header.field; // Verifica se o campo está ativo para ordenação

                    return (
                        <th
                            key={header.field}
                            className={`text-nowrap py-4 cursor-pointer ${header.className}`}
                            onClick={() => {
                                if (isSortable) {
                                    handleSort(header.field); // Aplica a ordenação
                                } else {
                                    openModal(); // Abre o modal para campos não ordenáveis
                                }
                            }}
                        >
                            <span className="select-none pointer-events-none">
                                {header.title}
                            </span>
                            {isSortable && isActive && (
                                <span className="inline-block ml-2 text-pink-700">
                                    {sortDirection === 'asc' ? (
                                        <ChevronUp strokeWidth={3} />
                                    ) : (
                                        <ChevronDown strokeWidth={3} />
                                    )}
                                </span>
                            )}
                            {isSortable && !isActive && (
                                <ChevronDown strokeWidth={3} className="inline-block ml-2 text-pink-700 opacity-50" />
                            )}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHeader;
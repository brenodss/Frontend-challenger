import { createContext, useContext, useState, useMemo } from "react";
import SolanaLogo from '../../assets/solana-sol-logo.svg';

const FilterContext = createContext();

export const LeaderboardProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc'); // Direção da ordenação

    const data = useMemo(() => [
        {
            rank: 1,
            trader: 'Orangie',
            InfoX: { followers: '279K', username: "@Orangie" },
            tokens: 104,
            winRate: 74,
            trades: { wins: 201, losses: 321 },
            avgBuy: { token: SolanaLogo, tokenAmount: "10.2", usdAmount: "$2152.4" },
            avgEntry: '212K',
            avgHold: '32m',
            realizedPNL: { token: SolanaLogo, tokenAmount: "10.2", usdAmount: "101.2K" },
            share: ""
        },
        {
            rank: 2,
            trader: 'BananaJoe',
            InfoX: { followers: '150K', username: "@BananaJoe" },
            tokens: 87,
            winRate: 80,
            trades: { wins: 180, losses: 200 },
            avgBuy: { token: SolanaLogo, tokenAmount: "9.5", usdAmount: "1950.7" },
            avgEntry: '198K',
            avgHold: '45m',
            realizedPNL: { token: SolanaLogo, tokenAmount: "8.7", usdAmount: "99.8K" },
            share: ""
        },
        {
            rank: 3,
            trader: 'CherryBlossom',
            InfoX: { followers: '320K', username: "@Cherry" },
            tokens: 112,
            winRate: 69,
            trades: { wins: 190, losses: 310 },
            avgBuy: { token: SolanaLogo, tokenAmount: "11.3", usdAmount: "2220.3" },
            avgEntry: '230K',
            avgHold: '28m',
            realizedPNL: { token: SolanaLogo, tokenAmount: "11.1", usdAmount: "105.5K" },
            share: ""
        },
        {
            rank: 4,
            trader: 'ApplePie',
            InfoX: { followers: '400K', username: "@ApplePie" },
            tokens: 95,
            winRate: 85,
            trades: { wins: 220, losses: 150 },
            avgBuy: { token: SolanaLogo, tokenAmount: "12.5", usdAmount: "$2500.0" },
            avgEntry: '240K',
            avgHold: '30m',
            realizedPNL: { token: SolanaLogo, tokenAmount: "12.0", usdAmount: "120.0K" },
            share: ""
        },
        {
            rank: 5,
            trader: 'GrapeFruit',
            InfoX: { followers: '180K', username: "@GrapeFruit" },
            tokens: 78,
            winRate: 72,
            trades: { wins: 170, losses: 210 },
            avgBuy: { token: SolanaLogo, tokenAmount: "8.9", usdAmount: "$1800.0" },
            avgEntry: '190K',
            avgHold: '40m',
            realizedPNL: { token: SolanaLogo, tokenAmount: "8.5", usdAmount: "85.0K" },
            share: ""
        },
        {
            rank: 6,
            trader: 'LemonDrop',
            InfoX: { followers: '300K', username: "@LemonDrop" },
            tokens: 110,
            winRate: 68,
            trades: { wins: 200, losses: 300 },
            avgBuy: { token: SolanaLogo, tokenAmount: "11.0", usdAmount: "$2200.0" },
            avgEntry: '210K',
            avgHold: '35m',
            realizedPNL: { token: SolanaLogo, tokenAmount: "10.8", usdAmount: "108.0K" },
            share: ""
        }
    ], []);

    const Headers = useMemo(() => [
        { title: 'Rank', field: 'rank', className: 'px-1 text-left', sortable: false },
        { title: 'Trader', field: 'trader', className: 'px-1 text-left', sortable: false },
        { title: 'Followers', field: 'InfoX.followers', className: 'px-1 text-end', sortable: true },
        { title: 'Tokens', field: 'tokens', className: 'px-1 text-center', sortable: true },
        { title: 'Win Rate', field: 'winRate', className: 'px-1 text-end', sortable: true },
        { title: 'Trades', field: 'trades', className: 'px-1 text-center', sortable: true },
        { title: 'Avg Buy', field: 'avgBuy.usdAmount', className: 'px-1 text-end', sortable: true },
        { title: 'Avg Entry', field: 'avgEntry', className: 'px-1 text-center', sortable: true },
        { title: 'Avg Hold', field: 'avgHold', className: 'px-1 text-center', sortable: true },
        { title: 'Realized PNL', field: 'realizedPNL.usdAmount', className: 'px-1 text-end', sortable: true },
        { title: 'Share', field: 'share', className: 'px-1 text-center', sortable: false },
    ], []);

    const parseAvgHold = (avgHold) => {
        if (avgHold.endsWith('m')) {
            return parseInt(avgHold, 10);
        } else if (avgHold.endsWith('h')) {
            return parseInt(avgHold, 10) * 60;
        }
        return 0;
    };

    const sortedData = useMemo(() => {
        if (!sortField) return data;

        return [...data].sort((a, b) => {
            let valueA, valueB;

            switch (sortField) {
                case 'trades':
                    valueA = a.trades.wins + a.trades.losses;
                    valueB = b.trades.wins + b.trades.losses;
                    break;
                case 'avgHold':
                    valueA = parseAvgHold(a.avgHold);
                    valueB = parseAvgHold(b.avgHold);
                    break;
                default:
                    valueA = a[sortField];
                    valueB = b[sortField];
                    break;
            }

            if (typeof valueA === 'string' && valueA.includes('$')) {
                valueA = parseFloat(valueA.replace('$', '').replace('K', ''));
                valueB = parseFloat(valueB.replace('$', '').replace('K', ''));
            }

            if (sortDirection === 'asc') {
                return valueA - valueB;
            } else {
                return valueB - valueA;
            }
        });
    }, [data, sortField, sortDirection]);

    const totalItems = sortedData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedData.slice(startIndex, endIndex);
    }, [sortedData, currentPage, itemsPerPage]);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const changeItemsPerPage = (number) => {
        setItemsPerPage(number);
        setCurrentPage(1);
    };

    const handleSort = (field) => {
        if (field === sortField) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const globalStates = {
        Headers,
        data: paginatedData,
        currentPage,
        totalPages,
        itemsPerPage,
        goToPage,
        changeItemsPerPage,
        handleSort,
        sortField,
        sortDirection
    };

    return (
        <FilterContext.Provider value={globalStates}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
import { createContext, useContext, useState, useMemo } from "react";
import SolanaLogo from '../assets/solana-sol-logo.svg';

const FilterContext = createContext();

export const LeaderboardProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

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
        { title: 'Rank', field: 'rank', className: 'px-6 w-12 text-left' },
        { title: 'Trader', field: 'trader', className: 'px-6 w-48 text-left' },
        { title: 'Followers', field: 'InfoX.followers', className: 'px-6 w-48 text-end' },
        { title: 'Tokens', field: 'tokens', className: 'px-6 w-20 text-center' },
        { title: 'Win Rate', field: 'winRate', className: 'px-6 text-end' },
        { title: 'Trades', field: 'trades.wins', className: 'px-6 w-24 text-center' },
        { title: 'Avg Buy', field: 'avgBuy.usdAmount', className: 'px-6 w-32 text-end' },
        { title: 'Avg Entry', field: 'avgEntry', className: 'px-6 w-32 text-center' },
        { title: 'Avg Hold', field: 'avgHold', className: 'px-6 w-32 text-center' },
        { title: 'Realized PNL', field: 'realizedPNL.usdAmount', className: 'px-6 w-32 text-end' },
        { title: 'Share', field: 'share', className: 'px-6 w-16 text-center' },
    ], []);

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    }, [data, currentPage, itemsPerPage]);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const changeItemsPerPage = (number) => {
        setItemsPerPage(number);
        setCurrentPage(1);
    };

    const globalStates = {
        Headers,
        data: paginatedData,
        currentPage,
        totalPages,
        itemsPerPage,
        goToPage,
        changeItemsPerPage
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

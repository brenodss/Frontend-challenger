import React, { useState } from 'react';
import Bull from '../../assets/Bull-icon.png';
import Orangie from '../../assets/Orangie.jpg';
import Solana from '../../assets/solana-sol-logo.svg';
import { ExternalLink, RotateCw, SquareArrowOutDownRight } from 'lucide-react';
import { Navigation } from '../Leaderboard/Components/TokenTable/Components/Navigation';
import { LeaderboardProvider } from '../../Context/TableContext/Context';
import { TokenTable } from '../Leaderboard/Components/TokenTable/Table';

// Função auxiliar para pegar valores corretamente
const GetObjectValues = (item) => {
  if (Array.isArray(item.value)) {
    return item.value.map((subItem, index) => (
      <span key={index} className={`text-xl ${subItem.className || ''}`}>
        {subItem.value}
      </span>
    ));
  }
  return <span className={`text-xl ${item.className}`}>{item.value}</span>;
};

const CustomButton = ({ active, tab }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm sm:text-base hover:bg-tertiary/5 ${active ? 'bg-primary text-white border-2 border-gray-200/15' : ''
        }`}
    >
      {tab}
    </button>
  );
};

const MobileStats = (trades) => {
  return (
    trades.map((item, i) => (
      <div key={i} className="md:hidden flex justify-between items-center p-2 bg-secondary text-xs border-b border-gray-300/5">
        <span className="text-gray-400">{item.label}</span>
        <div className="flex items-center gap-1">
          {item.img && <img src={item.img} className="w-4 h-4" alt="icon" />}
          {Array.isArray(item.value) ? (
            item.value.map((subItem, j) => (
              <span key={j} className={subItem.className}>{subItem.value}</span>
            ))
          ) : (
            <span className={item.className}>{item.value}</span>
          )}
        </div>
      </div>
    ))
  )
}

const DesktopStats = (trades) => {
  return (
    trades.map((item, index) => (
      <div key={index} className="md:flex hidden p-4 bg-secondary min-h-20 md:min-h-24 border-b border-gray-300/5 items-center justify-between">
        <div className="text-gray-400 text-sm">{item.label}</div>
        <div className="flex flex-col text-right">
          <div className='flex items-center gap-x-2'>
            {GetObjectValues(item)}
            {item.img && <img src={item.img} className="w-5 h-5" alt="icon" />}
          </div>
          {item.extra && <span className="text-gray-400 text-sm">{item.extra}</span>}
        </div>
      </div>
    ))
  )
}

const TraderProfile = () => {
  return (
    <div className="text-white h-full flex flex-col items-start justify-between w-full lg:w-5/12 gap-6">

      <div className='flex flex-row items-center gap-x-5'>
        <img className=" md:w-26 md:h-26 2xl:w-32 2xl:h-32 rounded-full border-4 border-purple-500" src={Orangie} alt="Profile" />
        <div>
          <h1 className="text-xl md:text-3xl font-bold">Orangie</h1>
          <p className="text-sm text-gray-400">9rjerg9r...rijr988rgri</p>
        </div>
      </div>

      <div className="text-center md:text-left w-full mt-auto flex-wrap">
        <div className="mt-8">
          <div className="bg-secondary border-b border-gray-300/5 p-4 min-h-20 md:min-h-24 flex items-center justify-between">
            <p className="font-medium">X Account</p>
            <div>
              <p className="font-medium text-base">@Orangie</p>
              <p className="font-medium text-sm text-gray-400">279k followers</p>
            </div>
          </div>
          <div className="bg-secondary p-4 flex items-center justify-between min-h-20 md:min-h-24">
            <p className="font-medium">Last trade</p>
            <p className="text-sm flex items-center gap-x-2 text-gray-400">
              30 min ago <img className="w-6 h-6 rounded-full animate-pulse" src={Bull} alt="Last trade" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TokenStats = () => {

  const trades = [
    { label: 'Tokens', value: '104' },
    { label: 'Average Buy', value: '10.2', extra: '$2,346', img: Solana },
    { label: 'Total Invested', value: '100.2', extra: '$23,460', img: Solana },
    { label: 'Win Rate', value: '74%', className: 'text-green-500' },
    { label: 'Average Entry', value: '$212K' },
    { label: 'ROI', value: '+304%', className: 'text-green-500' },
    {
      label: 'Trades',
      value: [
        { label: 'Win', value: '200', className: 'text-green-500' },
        { label: 'Loss', value: '251', className: 'text-red-500' }
      ]
    },
    { label: 'Average Hold', value: '32m' },
    { label: 'Realized PNL', value: '+301.3', extra: '$69,420', className: 'text-green-500' }
  ];

  return (
    <div className="w-full">
      <div className="mt-8 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2 flex-1">
          <CustomButton active={true} tab="Daily" />
          <CustomButton active={false} tab="Weekly" />
          <CustomButton active={false} tab="Monthly" />
          <CustomButton active={false} tab="All time" />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm">Last refreshed seconds ago</p>
          <RotateCw className="w-5 h-5 cursor-pointer text-primary" />
          <ExternalLink className="w-5 h-5 cursor-pointer text-violet-600" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 divide-x divide-gray-300/5">
          {MobileStats(trades)}
          {DesktopStats(trades)}
      </div>
    </div>
  );
};

const TraderSummary = () => {
  return (
    <div className="mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-start md:items-center justify-between w-full gap-6 md:gap-x-12 mb-16">
        <TraderProfile />
        <TokenStats />
      </div>
      <Navigation />
      <LeaderboardProvider>
        <TokenTable />
      </LeaderboardProvider>
    </div>
  );
};

export default TraderSummary;

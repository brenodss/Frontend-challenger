// App.jsx
import { useState } from 'react';
import SolanaLogo from '../../assets/solana-sol-logo.svg'
import { Navigation } from './Components/TokenTable/Components/Navigation';
import { TokenTable } from './Components/TokenTable/Table';
import Navbar from '../../Navbar';
import { LeaderboardProvider } from '../../Context/TableContext/Context';

export default function App() {
  const [activeTab, setActiveTab] = useState('Daily');
  console.log(SolanaLogo);

  return (
    <div className=" bg-[#060611] text-gray-300">
      <div className="px-6 mx-auto p-6">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <LeaderboardProvider>
          <TokenTable />
        </LeaderboardProvider>
      </div>
    </div>
  );
}
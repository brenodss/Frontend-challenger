import { Share2 } from "lucide-react";

export const MobileLeaderboardItem = ({
  rank,
  trader,
  InfoX,
  tokens,
  winRate,
  trades,
  avgBuy,
  avgEntry,
  avgHold,
  realizedPNL
}) => {

  const GetRankStyles = (rank) => {
    let bgClass = "";
    let borderClass = "";
    let blurClass = "";

    if (rank === 1) {
      blurClass = "bg-yellow-500";
      bgClass = "bg-yellow-600/20";
      borderClass = "border-yellow-500 border-2";
    } else if (rank === 2) {
      blurClass = "bg-gray-500";
      bgClass = "bg-gray-500/15";
      borderClass = "border-gray-500 border-2";
    } else if (rank === 3) {
      blurClass = "bg-yellow-800";
      bgClass = "bg-yellow-800/15";
      borderClass = "border-yellow-800 border-2";
    } else {
      blurClass = "bg-gray-700";
      bgClass = "";
      borderClass = "";
    }

    return { bgClass, borderClass, blurClass };
  };

  const { bgClass, borderClass, blurClass } = GetRankStyles(rank);

  return (
    <div className="border-b relative overflow-hidden border-gray-800/35 hover:bg-secondary transition-colors duration-300 font-semibold p-4 flex flex-wrap gap-y-7 gap-x-6 text-xs">
      
      <div className={`w-24 h-24 absolute top-0 left-0 blur-3xl opacity-40 ${blurClass}`} />

      <div className="flex flex-col items-start w-12">
        <span className="text-gray-400">Rank</span>
        <span className={`w-6 h-6 rounded-full flex items-center justify-center font-semibold text-gray-200 ${bgClass} ${borderClass}`}>
          {rank}
        </span>
      </div>

      <div className="flex flex-col items-start w-fit">
        <span className="text-gray-400">Trader</span>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-purple-500 mr-2"></div>
          <div>
            <div className="text-white">{trader}</div>
            <div className="text-gray-400 text-[10px]">0xJiewfj...SgrjHger</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end w-16">
        <span className="text-gray-400">Followers</span>
        <div className="text-white font-semibold">{InfoX.followers}</div>
        <span className="text-gray-400 hover:text-blue-500 cursor-pointer font-normal text-[10px]">
          {InfoX.username}
        </span>
      </div>

      <div className="flex flex-col items-center w-16">
        <span className="text-gray-400">Tokens</span>
        <span>{tokens}</span>
      </div>

      <div className="flex flex-col items-end w-16">
        <span className="text-gray-400">Win Rate</span>
        <span className="text-green-400">{winRate}%</span>
      </div>

      <div className="flex flex-col items-end w-16">
        <span className="text-gray-400">Trades</span>
        <div>
          <span className="text-green-400 font-semibold">{trades.wins}</span>
          <span className="text-gray-300 mx-1 font-semibold">/</span>
          <span className="text-red-400 font-semibold">{trades.losses}</span>
        </div>
      </div>

      <div className="flex flex-col items-end w-24">
        <span className="text-gray-400">Avg Buy</span>
        <div className="text-white font-semibold flex items-end gap-x-0.5">
          {avgBuy.tokenAmount}
          <img className="w-4 h-4" src={avgBuy.token} alt="Token" />
        </div>
        <span className="text-gray-400 font-normal text-end text-[10px]">{avgBuy.usdAmount}</span>
      </div>

      <div className="flex flex-col items-center w-24">
        <span className="text-gray-400">Avg Entry</span>
        <span>${avgEntry}</span>
      </div>

      <div className="flex flex-col items-center w-24">
        <span className="text-gray-400 text-end">Avg Hold</span>
        <span className="text-end">{avgHold}</span>
      </div>

      <div className="flex flex-col items-end w-24">
        <span className="text-gray-400">Realized PNL</span>
        <div className={`flex items-center gap-x-0.5 ${realizedPNL.tokenAmount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
          {realizedPNL.tokenAmount}
          <img className="w-4 h-4" src={avgBuy.token} alt="Token" />
        </div>
        <span className="text-gray-400 font-normal text-[10px]">{realizedPNL.usdAmount}</span>
      </div>

      <div className="flex flex-col items-center w-16">
        <span className="text-gray-400">Share</span>
        <button onClick={() => { }} className="p-2 hover:bg-primary rounded-lg cursor-pointer">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

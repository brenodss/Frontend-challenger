import { ClipboardCheck, ClipboardCheckIcon, Copy, CopyIcon, Share2 } from "lucide-react";
import Orangie from "../../../../assets/Orangie.jpg";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../../../Context/ModalContext/ModalContext";
import { useState } from "react";

export const LeaderboardItem = ({ rank, trader, InfoX, tokens, winRate, trades, avgBuy, avgEntry, avgHold, realizedPNL }) => {
  const { openModal } = useModalContext();

  const navigate = useNavigate();
  const GetRankStyles = (rank) => {
    let bgClass = "";
    let borderClass = "";
    let blurClass = "";
    if (rank === 1) {
      blurClass = "bg-yellow-500";
      bgClass = "bg-yellow-600/55";
      borderClass = "border-yellow-500 border-2";
    } else if (rank === 2) {
      blurClass = "bg-gray-500";
      bgClass = "bg-gray-500/55";
      borderClass = "border-gray-500 border-2";
    } else if (rank === 3) {
      blurClass = "bg-yellow-800";
      bgClass = "bg-yellow-800/55";
      borderClass = "border-yellow-800 border-2";
    } else {
      blurClass = "bg-gray-700";
      bgClass = "";
      borderClass = "";
    }

    return { bgClass, borderClass, blurClass };
  };

  const [isCopied, setIsCopied] = useState(false); // Estado para controlar o efeito de "copiado"

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("0xJiewfj...SgrjHger") // Copia o texto
      .then(() => {
        setIsCopied(true); // Ativa o efeito de "copiado"
        setTimeout(() => setIsCopied(false), 2000); // Desativa após 2 segundos
      })
      .catch((err) => {
        console.error("Falha ao copiar texto: ", err);
      });
  };

  return (
    <tr onClick={() => {
      if (true) {
        navigate('/trader') // Here, if wallet is connected, navigate to trader page, else open modal
      } else {
        openModal()
      }
    }} className="relative border-b border-gray-800/35 hover:bg-secondary transition-colors duration-300 font-semibold cursor-pointer">

      <td className="relative pl-5 w-12 h-full overflow-hidden">
        <div className="relative py-4 h-full rounded-lg">
          {/* // * Here i had to add the clip-path to the div because overflow-hidden doesnt work on <td /> tags */}
          <div
            className={`absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-24 blur-xl opacity-15 ${GetRankStyles(rank).blurClass}`}
            style={{
              clipPath: 'inset(0px -999px 0px 0px)',
            }}
          />
          <span className={`relative w-8 h-8 rounded-full flex items-center justify-center font-semibold ${GetRankStyles(rank).bgClass} ${GetRankStyles(rank).borderClass}`}>
            {rank}
          </span>
        </div>
      </td>

      <td className="py-4 w-24">
        <div className="flex items-center">
          <img src={Orangie} className="w-12 h-12 rounded-full bg-purple-500 mr-2 border-2 border-purple-500" />
          <div>
            <div className="text-white">{trader}</div>
            <div className="text-gray-400 text-sm">

              <button
                onClick={handleCopy}
                className="flex flex-row items-center gap-x-1 cursor-pointer"
              >
                <span>0xJiewfj...SgrjHger</span>
                {
                  isCopied ? <ClipboardCheckIcon className="w-3 h-3 text-green-400 hover:text-white cursor-pointer" /> :
                  <CopyIcon className="w-3 h-3 text-gray-400 hover:text-white cursor-pointer" />
                }
              </button>

            </div>
          </div>
        </div>
      </td>

      <td className="py-4 px-2 w-20 text-center">
        <div className="text-end">
          <div className="text-white font-semibold">{InfoX.followers}</div>
          <span className="text-gray-400 hover:text-blue-500 cursor-pointer font-normal text-sm">{InfoX.username}</span>
        </div>
      </td>

      <td className="py-4 px-2 w-20 text-center">{tokens}</td>

      <td className="py-4 px-2 w-24 text-center text-green-400">{winRate}%</td>

      <td className="py-4 px-2 w-24 text-center">
        <div className="text-center">
          <span className="text-green-400 font-semibold">{trades.wins}</span>
          <span className="text-gray-300 mx-1 font-semibold">/</span>
          <span className="text-red-400 font-semibold">{trades.losses}</span>
        </div>
      </td>

      <td className="py-4 px-2 w-32 text-end">
        <div className="flex items-center justify-end gap-x-1">
          <span className="text-white font-semibold">{avgBuy.tokenAmount}</span>
          <img className="w-5 h-5" src={avgBuy.token} alt="Token Icon" />
        </div>
        <span className="text-gray-400 font-normal text-sm">{avgBuy.usdAmount}</span>
      </td>

      <td className="py-4 px-2 w-32 text-center">${avgEntry}</td>

      <td className="py-4 px-2 w-32 text-center">{avgHold}</td>

      <td className="py-4 px-2 w-32 text-end">
        <div className={`flex items-center justify-end gap-x-1 ${realizedPNL.tokenAmount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
          <span>{realizedPNL.tokenAmount}</span>
          <img className="w-5 h-5" src={avgBuy.token} alt="Token Icon" />
        </div>
        <span className="text-gray-400 font-normal text-sm">{realizedPNL.usdAmount}</span>
      </td>

      <td className="py-4 px-2 w-16 text-center">
        <button onClick={() => { }} className="p-2 hover:bg-primary rounded-lg cursor-pointer">
          <Share2 className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
};

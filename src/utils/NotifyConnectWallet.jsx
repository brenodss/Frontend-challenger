import { useState } from "react";

function NotifyConnectWallet(callBack, condition) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConnectWallet = () => {
    // Lógica para conectar a wallet
    console.log("Conectando a wallet...");
    // Após conectar, feche o modal e execute o callback
    setIsModalOpen(false);
    callBack();
  };

  if (!condition) {
    // Se a condição for falsa, retorne o modal
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Conectar Carteira</h2>
          <p className="mb-4">Por favor, conecte sua carteira para continuar.</p>
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              onClick={handleConnectWallet}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Conectar
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    // Se a condição for verdadeira, execute o callback diretamente
    callBack();
    return null; // Não renderiza nada
  }
}

export default NotifyConnectWallet;
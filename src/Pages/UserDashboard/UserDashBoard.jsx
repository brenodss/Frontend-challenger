import React from 'react';
import { LogOut } from 'lucide-react'; // Ícones
import Orangie from '../../assets/Orangie.jpg';
import XTwitter from '../../assets/XTwitter.png'

function UserDashboard() {

    const handleConnectTwitter = () => {
        console.log("Conectar/Desconectar X (Twitter)");
    };

    const handleLogout = () => {
        console.log("Logout");
    };

    return (
        <div className="flex min-h-screen">
            {/* Barra lateral */}
            <div className="w-40 border-r-secondary border-r text-white p-4 flex flex-col items-center">
                {/* Imagem do usuário */}
                <img
                    src={Orangie} // Imagem de exemplo
                    alt="User"
                    className="w-40 rounded-full mb-4"
                />
                {/* Nome do usuário */}
                <p className="text-center font-semibold">John Doe</p>
                {/* Botão de Logout */}
                <button
                    onClick={handleLogout}
                    className="mt-6 flex items-center justify-center w-full py-2 bg-secondary hover:bg-primary cursor-pointer text-white rounded-md"
                >
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                </button>
            </div>

            <div className="flex-1 p-6 bg-transparent">

                <div className="mb-6">
                    <h2 className="text-xl font-semibold border-b border-gray-300/5 pb-2 mb-4">
                        Manage Profile
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Username</label>
                            <input
                                type="text"
                                defaultValue="JohnDoe123"
                                className="w-full p-2 bg-secondary rounded-lg border border-white/5 border-opacity-10 focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Bio</label>
                            <textarea
                                spellCheck="false"
                                defaultValue="Crypto enthusiast and memecoin trader."
                                className="w-full p-2 bg-secondary rounded-lg border border-white/5 border-opacity-10 focus:outline-none focus:border-primary"
                                rows={3}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Favorite Memecoin</label>
                            <select
                                className="w-full p-2 bg-secondary rounded-lg border border-white/5 border-opacity-10 focus:outline-none focus:border-primary"
                            >
                                <option value="DOGE">Dogecoin (DOGE)</option>
                                <option value="SHIB">Shiba Inu (SHIB)</option>
                                <option value="PEPE">PepeCoin (PEPE)</option>
                                <option value="FLOKI">Floki Inu (FLOKI)</option>
                            </select>
                        </div>
                        <button
                            onClick={() => console.log("Profile saved!")}
                            className="hover:bg-primary cursor-pointer w-fit px-3 border-2 border-primary py-2 bg-secondary text-white rounded-lg"
                        >
                            Save Profile
                        </button>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold border-b border-gray-300/5 pb-2 mb-4">
                        X Connection
                    </h2>
                    <button
                        onClick={handleConnectTwitter}
                        className="flex items-center p-2 px-3 w-fit border-2 border-primary bg-secondary rounded-lg shadow-md hover:bg-primary cursor-pointer cursor-pointer transition-colors"
                    >   
                        <img src={XTwitter} alt="XTwitter" className="w-6 h-6 mr-4" />
                        <span className="text-lg">Connect / Disconnect</span>
                    </button>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold border-b border-gray-300/5 pb-2 mb-4">
                        Settings
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Enable Notifications</label>
                            <select
                                className="w-full p-2 bg-secondary rounded-lg border border-white/5 border-opacity-10 focus:outline-none focus:border-primary"
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Daily Trade Limit</label>
                            <input
                                type="number"
                                defaultValue="10"
                                className="w-full p-2 bg-secondary rounded-lg border border-white/5 border-opacity-10 focus:outline-none focus:border-primary"
                            />
                        </div>
                        <button
                            onClick={() => console.log("Settings saved!")}
                            className="hover:bg-primary cursor-pointer w-fit px-3 border-2 border-primary py-2 bg-secondary text-white rounded-lg"
                        >
                            Save Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
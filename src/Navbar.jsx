import { useState } from 'react';
import { X, MenuIcon } from 'lucide-react';
import PotionLogo from './assets/PotionLogo.png';
import Orangie from './assets/Orangie.jpg';
import Discord from './assets/Discord.png';
import XTwitter from './assets//XTwitter.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="mb-24">
            <div className="mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-16">

                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <img
                                className="cursor-pointer w-56"
                                src={PotionLogo}
                                alt="Potion Logo"
                                onClick={ () => navigate("/") }
                            />
                        </div>


                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                <a href="#" className="text-white px-3 py-2 hover:text-purple-500">
                                    Leaderboards
                                </a>
                                <a href="#" className="text-gray-300 px-3 py-2 hover:text-purple-500">
                                    Learn
                                </a>
                                <a href="#" className="text-gray-300 px-3 py-2 hover:text-purple-500">
                                    Prizes
                                </a>
                                <a className='
                                flex flex-row items-center gap-2
                                bg-secondary p-3 border-2 border-primary cursor-pointer font-bold'>
                                    Connect your
                                    <img src={XTwitter} className="h-5 w-5" alt="Discord" />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="hidden md:flex items-center gap-4">
                        {/* Twitter Icon */}
                        <a href="#" className=" hover:text-purple-500 w-8 h-8 flex items-center justify-center">
                            <img src={XTwitter} className="h-9 w-9" alt="Discord" />
                        </a>
                        {/* Discord Icon */}
                        <a href="#" className="text-gray-300 hover:text-purple-500 w-8 h-8 flex items-center justify-center">
                            <img src={Discord} className="h-9 w-9" alt="Discord" />
                        </a>
                        {/* Avatar */}
                        <img onClick={() => navigate("/dashboard")} src={Orangie} className="h-10 w-10 rounded-full cursor-pointer" />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        <a href="#" className=" hover:text-purple-500 w-8 h-8 flex items-center justify-center">
                            <img src={XTwitter} className="h-9 w-9" alt="Discord" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-purple-500 w-8 h-8 flex items-center justify-center">
                            <img src={Discord} className="h-9 w-9" alt="Discord" />
                        </a>
                        <img src={Orangie} className="h-10 w-10 rounded-full" />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <MenuIcon className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden border-b border-purple-500/15">
                    <div className="px-2 pt-2 pb-3">
                        <a
                            href="#"
                            className="text-white block px-3 py-2 hover:bg-primary"
                        >
                            Leaderboards
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 block px-3 py-2 hover:bg-primary"
                        >
                            Learn
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 block px-3 py-2 hover:bg-primary"
                        >
                            Prizes
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
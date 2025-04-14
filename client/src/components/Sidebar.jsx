import CommunityItem from './CommunityItem.jsx';
import { Home, TrendingUp, MessageCircle, Compass, List, ChevronDown, Plus } from 'lucide-react';
export default function Sidebar({ currentView, goToHome }) {
    return (
      <div className="w-56 bg-gray-900 border-r border-gray-700 overflow-y-auto hidden md:block">
        <nav className="p-3">
          <ul className="space-y-1">
            <li>
              <a 
                href="#" 
                className={`flex items-center px-4 py-2 hover:bg-gray-800 rounded-md ${currentView === 'main' ? 'text-white bg-gray-800' : 'text-gray-300'}`}
                onClick={goToHome}
              >
                <Home size={20} className="mr-3" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
                <TrendingUp size={20} className="mr-3" />
                <span>Popular</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
                <MessageCircle size={20} className="mr-3" />
                <span>Answers</span>
                <span className="ml-2 px-2 py-0.5 text-xs bg-orange-600 rounded-md">BETA</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
                <Compass size={20} className="mr-3" />
                <span>Explore</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
                <List size={20} className="mr-3" />
                <span>All</span>
              </a>
            </li>
          </ul>
  
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-400">
              <span>CUSTOM FEEDS</span>
              <ChevronDown size={16} />
            </div>
            <div className="mt-2">
              <button className="flex items-center px-4 py-2 text-blue-500 hover:bg-gray-800 rounded-md w-full text-left">
                <Plus size={20} className="mr-3" />
                <span>Create a custom feed</span>
              </button>
            </div>
          </div>
  
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-400">
              <span>RECENT</span>
              <ChevronDown size={16} />
            </div>
            <ul className="mt-2 space-y-1">
              <CommunityItem name="v/Delhi" avatar="/api/placeholder/20/20" />
              <CommunityItem name="v/Orissa" avatar="/api/placeholder/20/20" />
              <CommunityItem name="v/Rajasthan" avatar="/api/placeholder/20/20" />
              <CommunityItem name="v/Goa" avatar="/api/placeholder/20/20" />
              <CommunityItem name="v/West Bengal" avatar="/api/placeholder/20/20" />
            </ul>
          </div>
  
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-400">
              <span>COMMUNITIES</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
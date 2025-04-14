import { Search, X, MessageSquare, Bell, Plus } from 'lucide-react';
import SearchResultItem from './SearchResultItem.jsx';
import SearchPostItem from './SearchPostItem.jsx';
export default function Header({ searchQuery, handleSearch, showSearchResults, clearSearch, viewSubreddit }) {
    return (
      <header className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-700 relative z-10">
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center mr-2">
              <span className="text-white font-bold">भ</span>
            </div>
            <a href=""><span className="text-lg font-bold">bharatVoice</span></a>
          </div>
        </div>
        <div className="flex-1 mx-4 relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="bg-gray-800 text-sm rounded-full py-2 pl-10 pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search bharatVoice"
            />
            {searchQuery && (
              <button 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                onClick={clearSearch}
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          {showSearchResults && (
            <div className="absolute mt-1 w-full bg-gray-800 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
              <div className="py-2">
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 border-b border-gray-700">
                  COMMUNITIES
                </div>
                <div>
                  <SearchResultItem 
                    name="r/MadhyaPradesh" 
                    description="The official subreddit for MP discussions" 
                    members="56.4k"
                    onClick={() => viewSubreddit({
                      name: 'MadhyaPradesh',
                      fullName: 'r/MadhyaPradesh',
                      description: 'The official subreddit for Madhya Pradesh - The Heart of India',
                      members: 56423,
                      online: 842,
                      created: 'Jun 15, 2018',
                      rules: [
                        'Be respectful and civil',
                        'No spam or self-promotion',
                        'Content must be related to Madhya Pradesh',
                        'No hate speech or offensive content',
                        'Follow bharatVoice content policy'
                      ]
                    })}
                  />
                  <SearchResultItem 
                    name="r/MPTourism" 
                    description="Explore the beauty of Madhya Pradesh" 
                    members="32.8k"
                    onClick={() => viewSubreddit({
                      name: 'MPTourism',
                      fullName: 'r/MPTourism',
                      description: 'Explore the beauty, culture, and heritage of Madhya Pradesh - tourist destinations, travel tips, and photographs',
                      members: 32812,
                      online: 425,
                      created: 'Oct 3, 2019',
                      rules: [
                        'Share high-quality images and information',
                        'Be respectful of local cultures and traditions',
                        'No spamming or excessive self-promotion',
                        'Content must be related to MP tourism',
                        'Provide source credits for images when possible'
                      ]
                    })}
                  />
                </div>
                
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 border-b border-gray-700 mt-3">
                  POSTS
                </div>
                <div>
                  <SearchPostItem 
                    title="Best places to visit in Madhya Pradesh during monsoon" 
                    subreddit="r/MadhyaPradesh"
                    upvotes={342}
                    comments={45}
                    timeAgo="2 months ago"
                  />
                  <SearchPostItem 
                    title="MP government announces new tech initiatives" 
                    subreddit="r/MadhyaPradesh"
                    upvotes={526}
                    comments={98}
                    timeAgo="3 weeks ago"
                  />
                  <SearchPostItem 
                    title="Hidden gems in MP that tourists often miss" 
                    subreddit="r/MPTourism"
                    upvotes={412}
                    comments={67}
                    timeAgo="1 month ago"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-transparent hover:bg-gray-800 p-2 rounded-full">
            <MessageSquare size={20} className="text-gray-300" />
          </button>
          <button className="bg-transparent hover:bg-gray-800 p-2 rounded-full">
            <Bell size={20} className="text-gray-300" />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full flex items-center text-sm">
            <Plus size={16} className="mr-1" />
            Create
          </button>
          <div className="flex items-center space-x-1 cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-gray-700"></div>
          </div>
        </div>
      </header>
    );
  }

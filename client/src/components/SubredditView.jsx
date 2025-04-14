import { useState } from "react";
import { Calendar } from 'lucide-react';
import PostCard from './PostCard.jsx';
export default function SubredditView({ subreddit }) {
    const [joinedState, setJoinedState] = useState(false);
    
    const toggleJoin = () => {
      setJoinedState(!joinedState);
    };
    
    return (
      <div className="flex-1 overflow-y-auto">
        {/* Subreddit Banner */}
        <div className="h-32 bg-gradient-to-r from-blue-700 via-purple-600 to-blue-600"></div>
        
        {/* Subreddit Info */}
        <div className="bg-gray-900 border-b border-gray-700">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-end pb-3 relative">
              <div className="absolute bottom-0 left-4 transform translate-y-1/3">
                <div className="h-16 w-16 rounded-full bg-blue-600 border-4 border-gray-900 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{subreddit.name.substring(0, 2)}</span>
                </div>
              </div>
              
              <div className="ml-24 flex-1 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">{subreddit.fullName}</h1>
                    <p className="text-sm text-gray-400">{subreddit.fullName}</p>
                  </div>
                  <button 
                    className={`px-6 py-1 rounded-full font-medium ${joinedState ? 'bg-gray-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                    onClick={toggleJoin}
                  >
                    {joinedState ? 'Joined' : 'Join'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subreddit Content */}
        <div className="max-w-5xl mx-auto px-4 py-4 flex">
          <div className="flex-1 pr-4">
            {/* Post Creation Card */}
            <div className="bg-gray-800 rounded-md p-4 mb-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-700 mr-4"></div>
                <input
                  type="text"
                  className="bg-gray-700 text-sm rounded-full py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Create Post"
                />
              </div>
            </div>
            
            {/* Madhya Pradesh specific posts */}
            <div className="space-y-4">
              <PostCard 
                title="PMAY scheme has provided me a home, but keep these documents ready for application"
                author="u/homeSeeker" 
                timeAgo="2 days ago"
                votes={342}
                comments={78}
                likes={289}
                imageSrc="/api/placeholder/600/400"
              />
              
              <PostCard 
                title="Tourism schemes like Khajuraho Festival create jobs and boost local economy"
                author="u/cultureExplorer" 
                timeAgo="3 days ago"
                votes={256}
                comments={45}
                likes={217}
                imageSrc="/api/placeholder/600/400"
              />
              
              <PostCard 
                title="Digital India initiative is helping rural areas with jobs and better connectivity"
                author="u/techDeveloper" 
                timeAgo="4 days ago"
                votes={478}
                comments={124}
                likes={395}
                imageSrc="/api/placeholder/600/400"
              />
              
              <PostCard 
                title="Project Tiger is crucial for preserving wildlife and boosting eco-tourism"
                author="u/wildlifePhotographer" 
                timeAgo="5 days ago"
                votes={612}
                comments={87}
                likes={532}
                imageSrc="/api/placeholder/600/400"
              />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-80 hidden lg:block">
            {/* About Community */}
            <div className="bg-gray-800 rounded-md overflow-hidden mb-4">
              <div className="px-4 py-3 bg-gray-700/50 font-medium">About Community</div>
              <div className="p-4">
                <p className="text-sm mb-4">{subreddit.description}</p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-1">
                    <div className="font-medium">{subreddit.members.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">Members</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{subreddit.online.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">Online</div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-400 border-t border-gray-700 pt-3">
                  <Calendar size={14} className="mr-2" />
                  <span>Created {subreddit.created}</span>
                </div>
              </div>
            </div>
            
            {/* Community Rules */}
            <div className="bg-gray-800 rounded-md overflow-hidden mb-4">
              <div className="px-4 py-3 bg-gray-700/50 font-medium">Community Rules</div>
              <div className="p-4">
                <ol className="space-y-3">
                  {subreddit.rules.map((rule, index) => (
                    <li key={index} className="text-sm flex items-start">
                      <span className="font-medium mr-2">{index + 1}.</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            
            {/* Moderators */}
            <div className="bg-gray-800 rounded-md overflow-hidden">
              <div className="px-4 py-3 bg-gray-700/50 font-medium">Moderators</div>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 rounded-full bg-gray-700 mr-2"></div>
                  <span className="text-sm">u/MPModerator</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 rounded-full bg-gray-700 mr-2"></div>
                  <span className="text-sm">u/HeartOfIndia</span>
                </div>
                <button className="text-blue-500 text-sm hover:underline">View All Moderators</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
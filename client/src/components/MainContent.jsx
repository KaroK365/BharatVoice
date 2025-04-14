import { useState } from 'react';
import { User, ChevronDown, MessageCircle, ThumbsUp, Share2 } from 'lucide-react';
import PostCard from './PostCard.jsx';
import SidebarPost from './SidebarPost.jsx'; // Add this line
export default function MainContent({ selectedPost, setSelectedPost }) {
    return (
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="bg-gray-900 px-4 py-2 flex items-center border-b border-gray-700">
            <div className="flex items-center">
              <div className="mr-2">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
              </div>
              <span className="font-medium mr-3">r/BharatVoice</span>
            </div>
            <div className="ml-auto">
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-gray-200">
                  <span className="text-sm">Best</span>
                  <ChevronDown size={16} className="inline ml-1" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center py-4 px-4 space-y-6">
            <PostCard 
              title="Digital India initiatives are transforming rural areas with better connectivity"
              author="u/techNerd" 
              timeAgo="5 hours ago"
              votes={258}
              comments={43}
              likes={189}
              imageSrc="/api/placeholder/600/400"
              onClick={() => setSelectedPost('post1')}
            />
            
            <PostCard 
              title="Mobile internet services restored in all regions under BharatNet project"
              author="u/newsDaily" 
              timeAgo="8 hours ago"
              votes={542}
              comments={127}
              likes={421}
              imageSrc="/api/placeholder/600/400"
              onClick={() => setSelectedPost('post2')}
            />
            
            <PostCard 
              title="Odisha's KALIA scheme is helping farmers with financial aid and resources"
              author="u/securityAlert" 
              timeAgo="12 hours ago"
              votes={189}
              comments={36}
              likes={145}
              imageSrc="/api/placeholder/600/400"
              onClick={() => setSelectedPost('post3')}
            />
            
            <PostCard 
              title="Tamil Nadu's Amma Canteens provide affordable meals for the needy"
              author="u/startupGrowth" 
              timeAgo="1 day ago"
              votes={476}
              comments={82}
              likes={355}
              imageSrc="/api/placeholder/600/400"
              onClick={() => setSelectedPost('post4')}
            />
            
            <PostCard 
              title="5G services now available in 80% of the country under Digital India"
              author="u/connectIndia" 
              timeAgo="1 day ago"
              votes={312}
              comments={64}
              likes={267}
              imageSrc="/api/placeholder/600/400"
              onClick={() => setSelectedPost('post5')}
            />
          </div>
        </div>
        
        <div className="w-80 hidden lg:block bg-gray-900 border-l border-gray-700 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-sm font-medium text-gray-400 mb-4">RECENT POSTS</h2>
            
            <div className="space-y-4">
              <SidebarPost 
                title="How to register for new UPI services?"
                community="r/IndiaFintech" 
                votes={187}
                comments={34}
              />
              
              <SidebarPost 
                title="Best coding bootcamps in India"
                community="r/LearnCoding" 
                votes={94}
                comments={42}
              />
              
              <SidebarPost 
                title="Monthly tech meetup in Bangalore"
                community="r/BengaluruTech" 
                votes={156}
                comments={28}
              />
              
              <SidebarPost 
                title="New environmental policies discussion"
                community="r/IndiaEnvironment" 
                votes={203}
                comments={76}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
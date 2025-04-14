import { useState } from 'react';
import { MessageCircle, ThumbsUp, Share2 } from 'lucide-react';
export default function PostCard({ title, author, timeAgo, votes, comments, likes, imageSrc, onClick }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);
    
    const handleLike = (e) => {
      e.stopPropagation();
      if (liked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setLiked(!liked);
    };
    
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:border hover:border-gray-700 cursor-pointer max-w-2xl w-full shadow-lg" onClick={onClick}>
        <div className="p-4">
          <div className="flex items-center mb-3">
            <div className="h-8 w-8 rounded-full bg-gray-700 mr-2"></div>
            <div>
              <div className="font-medium text-sm">{author}</div>
              <div className="text-xs text-gray-400">{timeAgo}</div>
            </div>
          </div>
          <h3 className="text-lg font-medium mb-3">{title}</h3>
        </div>
        
        <div className="w-full bg-gray-700">
          <img src={imageSrc} alt={title} className="w-full object-cover h-64" />
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
            <button 
                className={`flex items-center hover:bg-gray-700 px-2 py-1 rounded ${liked ? 'text-blue-500' : 'text-gray-400'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(e);
                }}
              >
                <ThumbsUp size={16} className="mr-1" />
                <span className="text-sm">{likeCount} likes</span>
              </button>
              <button className="flex items-center hover:bg-gray-700 px-2 py-1 rounded text-gray-400">
                <MessageCircle size={16} className="mr-1" />
                <span className="text-sm">{comments} comments</span>
              </button>
            </div>
            
            <button className="flex items-center hover:bg-gray-700 px-2 py-1 rounded text-gray-400">
              <Share2 size={16} className="mr-1" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
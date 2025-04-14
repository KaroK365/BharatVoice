import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SubredditView from './components/SubredditView';

export default function BharatVoiceUI() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [currentView, setCurrentView] = useState('main'); // 'main', 'subreddit', 'post'
  const [currentSubreddit, setCurrentSubreddit] = useState(null);
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(e.target.value.length > 0);
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setShowSearchResults(false);
  };
  
  const viewSubreddit = (subreddit) => {
    setCurrentSubreddit(subreddit);
    setCurrentView('subreddit');
    setShowSearchResults(false);
  };
  
  const goToHome = () => {
    setCurrentView('main');
    setCurrentSubreddit(null);
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Header 
        searchQuery={searchQuery} 
        handleSearch={handleSearch} 
        showSearchResults={showSearchResults}
        clearSearch={clearSearch}
        viewSubreddit={viewSubreddit}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentView={currentView} goToHome={goToHome} />
        {currentView === 'main' && (
          <MainContent selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
        )}
        {currentView === 'subreddit' && currentSubreddit && (
          <SubredditView subreddit={currentSubreddit} />
        )}
      </div>
    </div>
  );
}
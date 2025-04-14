export default function SearchPostItem({ title, subreddit, upvotes, comments, timeAgo }) {
    return (
      <div className="px-4 py-3 hover:bg-gray-700 cursor-pointer">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-400 flex items-center mt-1">
          <span>{subreddit}</span>
          <span className="mx-1">•</span>
          <span>{upvotes} upvotes</span>
          <span className="mx-1">•</span>
          <span>{comments} comments</span>
          <span className="mx-1">•</span>
          <span>{timeAgo}</span>
        </div>
      </div>
    );
  }
export default function SidebarPost({ title, community, votes, comments }) {
    return (
      <div className="flex space-x-3">
        <div className="w-12 h-12 rounded bg-gray-700 flex-shrink-0 overflow-hidden">
          <img src="/api/placeholder/48/48" alt="Post thumbnail" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium mb-1 line-clamp-2">{title}</h3>
          <div className="flex items-center text-xs text-gray-400">
            <span>{community}</span>
            <span className="mx-1">•</span>
            <span>{votes} upvotes</span>
            <span className="mx-1">•</span>
            <span>{comments} comments</span>
          </div>
        </div>
      </div>
    );
  }
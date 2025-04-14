export default function SearchResultItem({ name, description, members, onClick }) {
    return (
      <div 
        className="px-4 py-3 hover:bg-gray-700 cursor-pointer flex items-center"
        onClick={onClick}
      >
        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
          <span className="text-white font-bold text-xs">{name.substring(2, 4)}</span>
        </div>
        <div className="flex-1">
          <div className="font-medium">{name}</div>
          <div className="text-sm text-gray-400 flex items-center">
            <span>{description}</span>
            <span className="mx-1">•</span>
            <span>{members} members</span>
          </div>
        </div>
      </div>
    );
  }
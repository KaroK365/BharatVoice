export default function CommunityItem({ name, avatar }) {
    return (
      <li>
        <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
          <img src={avatar} alt={name} className="w-5 h-5 rounded-full mr-3" />
          <span className="text-sm">{name}</span>
        </a>
      </li>
    );
  }
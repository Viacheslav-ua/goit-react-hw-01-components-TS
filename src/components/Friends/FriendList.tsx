import "./Friends.css";
import FriendListItem from "./FriendListItem";

interface FriendInterface {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

type FriendListProps = {
  friends: FriendInterface[];
};

const FriendList: React.FC<FriendListProps> = ({ friends }) => {
  return (
    <ul className="Friends">
      {friends.map((item) => (
        <FriendListItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
};
export default FriendList;

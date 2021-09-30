interface FriendItemInterface {
  avatar: string;
  name: string;
  isOnline: boolean;
}

const FriendListItem: React.FC<FriendItemInterface> = ({
  isOnline,
  avatar,
  name,
}) => {
  return (
    <li className="Friends__item">
      <span
        className={
          isOnline
            ? "Friends__status Friends__status--online"
            : "Friends__status Friends__status--offline"
        }
      ></span>
      <img className="Friends__avatar" src={avatar} alt="avatar" width="60" />
      <p className="Friends__name">{name}</p>
    </li>
  );
};

export default FriendListItem;

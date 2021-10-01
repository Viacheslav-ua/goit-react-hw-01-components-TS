import defaultImg from "../../img/no-image.jpg";
import styles from "./Profile.module.css";

interface ProfileInterface {
  name: string;
  tag: string;
  location: string;
  avatar?: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

const Profile: React.FC<ProfileInterface> = ({
  name,
  tag,
  location,
  avatar,
  stats,
}) => {
  return (
    <div className={styles.Profile}>
      <div className={styles.Profile__description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.Profile__avatar}
        />
        <p className={styles.Profile__name}>{name}</p>
        <p className={styles.Profile__tag}>@{tag}</p>
        <p className={styles.Profile__location}>{location}</p>
      </div>

      <ul className={styles.Profile__stats}>
        <li className={styles.Profile__item}>
          <span className={styles.Profile__label}>Followers</span>
          <span className={styles.Profile__quantity}>{stats.followers}</span>
        </li>
        <li className={styles.Profile__item}>
          <span className={styles.Profile__label}>Views</span>
          <span className={styles.Profile__quantity}>{stats.views}</span>
        </li>
        <li className={styles.Profile__item}>
          <span className={styles.Profile__label}>Likes</span>
          <span className={styles.Profile__quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = { avatar: defaultImg };

export default Profile;

import { FriendsPhoto, Indicator } from './FriendItem.styled';

export const FriendInfo = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <>
      <Indicator online={isOnline}></Indicator>
      <FriendsPhoto src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

import { Box } from 'components/utils/box';
import { UserPhoto, UserName, UserContact } from './UserInfo.styled';
export const UserInfo = ({ avatar, username, tag, location }) => {
  return (
    <Box mb="16px" display="flex" flexDirection="column" alignItems="center">
      <UserPhoto src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <UserContact>@{tag}</UserContact>
      <UserContact>{location}</UserContact>
    </Box>
  );
};

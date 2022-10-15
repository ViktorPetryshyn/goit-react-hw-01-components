import { UserInfo } from './user-info/UserInfo';
import { UserStats } from './user-stats/UserStats';
import { Box } from 'components/utils/box';
import PropTypes from 'prop-types';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <Box
      m="20px 0 32px"
      pt="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor="white"
      borderRadius="3px"
    >
      <UserInfo
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <UserStats stats={stats} />
    </Box>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

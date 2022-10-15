import {
  StatsList,
  StatsItem,
  StatsTitle,
  StatsQuery,
} from './UserStats.styled.';

export const UserStats = ({ stats }) => {
  return (
    <StatsList>
      <StatsItem>
        <StatsTitle>Followers</StatsTitle>
        <StatsQuery>{stats.followers}</StatsQuery>
      </StatsItem>
      <StatsItem>
        <StatsTitle>Views</StatsTitle>
        <StatsQuery>{stats.views}</StatsQuery>
      </StatsItem>
      <StatsItem>
        <StatsTitle>Likes</StatsTitle>
        <StatsQuery>{stats.likes}</StatsQuery>
      </StatsItem>
    </StatsList>
  );
};

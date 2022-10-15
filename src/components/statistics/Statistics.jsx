import { StatsInfo } from './StatsItem/StatsInfo';
import {
  StatList,
  StatSection,
  StatTitle,
  StatsItem,
} from './Statistics.styled';
import { PropTypes } from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(statsInfo => (
          <StatsItem key={statsInfo.id}>
            <StatsInfo statsInfo={statsInfo} />
          </StatsItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

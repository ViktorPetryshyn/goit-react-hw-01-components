import styled from 'styled-components';

export const StatsList = styled.ul`
  border-top: 1px solid ${p => p.theme.colors.borderColor};
  background-color: ${p => p.theme.colors.userStatsBackground};
  display: flex;
  align-items: center;
  border-radius: 0 0 2px 2px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75px;
  height: 55px;
  :not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.borderColor};
  }
`;

export const StatsTitle = styled.span`
  text-align: center;
  margin-bottom: 2px;
  font-size: 11px;
  color: ${p => p.theme.colors.grey};
`;

export const StatsQuery = styled.span`
  text-align: center;
  font-weight: 550;
  font-size: 12px;
`;

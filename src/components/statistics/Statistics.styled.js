import styled from 'styled-components';
import { getRandomHexColor } from '../utils/randomColor';

export const StatSection = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 2px;
`;
export const StatTitle = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 550;
  color: ${p => p.theme.colors.grey};
`;
export const StatList = styled.ul`
  display: flex;
  border-radius: 0 0 2px 2px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 50px;
  color: ${p => p.theme.colors.userStatsBackground};
  background-color: ${getRandomHexColor};
`;

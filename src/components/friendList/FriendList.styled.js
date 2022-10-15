import styled from 'styled-components';

export const FriendsList = styled.ul`
  margin-bottom: 32px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 180px;
  border-radius: 2px;
  padding: 2px;
  background-color: ${p => p.theme.colors.white};
  :not(:last-child) {
    margin-bottom: 3px;
  }
  box-shadow: 0px 1px 1px ${p => p.theme.colors.userStatsBackground};
`;

import styled from 'styled-components';

export const Indicator = styled.span`
  margin-left: 3px;
  width: 5px;
  height: 5px;
  background-color: ${p => {
    return p.online ? p.theme.colors.online : p.theme.colors.offline;
  }};
  border-radius: 50%;
`;

export const FriendsPhoto = styled.img`
  width: 30px;
  padding: 1px;
  border-radius: 4px;
  background-color: ${p => p.theme.colors.grey};
`;

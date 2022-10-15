import styled from 'styled-components';

export const UserPhoto = styled.img`
  background-color: ${p => p.theme.colors.grey};
  width: 100px;
  border-radius: 50%;
  margin-bottom: 25px;
`;
export const UserName = styled.p`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 12px;
`;
export const UserContact = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: ${p => p.theme.colors.grey};
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

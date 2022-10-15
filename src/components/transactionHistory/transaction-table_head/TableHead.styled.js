import styled from 'styled-components';

export const TransactTitle = styled.thead`
  background-color: ${p => p.theme.colors.tableHead};
`;
export const TransacHead = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 180px;
  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0.1ch;
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  :not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.white};
  }
`;

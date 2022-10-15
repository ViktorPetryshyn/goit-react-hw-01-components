import styled from 'styled-components';

export const TransactTable = styled.table`
  margin-bottom: 32px;
  text-align: center;
  background-color: ${p => p.theme.colors.white};
  border-collapse: collapse;
  border-radius: 2px;
  box-shadow: 0 3px 2px 2px ${p => p.theme.colors.grey};
`;

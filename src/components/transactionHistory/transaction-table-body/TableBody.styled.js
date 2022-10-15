import styled, { css } from 'styled-components';

const blockSizeStyles = css`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.1ch;
  color: #515151;
`;
export const TransactType = styled.td`
  ${blockSizeStyles}
  padding-left: 70px;
  border-right: 1px solid ${p => p.theme.colors.userStatsBackground};
  text-align: left;
  :first-letter {
    text-transform: uppercase;
  }
`;
export const TransactRow = styled.tr`
  :nth-child(odd) {
    background-color: ${p => p.theme.colors.userStatsBackground};
  }
`;
export const TransactAmount = styled.td`
  ${blockSizeStyles};
  :not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.userStatsBackground};
  }
`;

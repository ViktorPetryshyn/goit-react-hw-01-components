import { TransactTitle, TransacHead } from './TableHead.styled';
export const TableHead = () => {
  return (
    <TransactTitle>
      <tr>
        <TransacHead>Type</TransacHead>
        <TransacHead>Amount</TransacHead>
        <TransacHead>Currency</TransacHead>
      </tr>
    </TransactTitle>
  );
};

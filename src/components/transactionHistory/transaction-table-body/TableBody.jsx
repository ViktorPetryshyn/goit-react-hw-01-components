import { TransactType, TransactRow, TransactAmount } from './TableBody.styled';

export const TableBody = ({ items }) => {
  return (
    <tbody>
      {items.map(item => (
        <TransactRow key={item.id}>
          <TransactType>{item.type}</TransactType>
          <TransactAmount>{item.amount}</TransactAmount>
          <TransactAmount>{item.currency}</TransactAmount>
        </TransactRow>
      ))}
    </tbody>
  );
};

import { TableHead } from './transaction-table_head/TableHead';
import { TableBody } from './transaction-table-body/TableBody';
import { TransactTable } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactTable>
      <TableHead />
      <TableBody items={items} />
    </TransactTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

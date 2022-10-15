import { Profile } from 'components/profile/Profile';
import user from './dataset/user.json';

import { Statistics } from 'components/statistics/Statistics';
import data from './dataset/data.json';

import { FriendList } from 'components/friendList/FriendList';
import friends from './dataset/friends.json';

import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';
import transactions from './dataset/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

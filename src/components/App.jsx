import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <div className="section-box">
        <section>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </section>

        <section>
          <Statistics title="Upload stats" stats={data} />
        </section>

        <section>
          <FriendList friends={friends} />
        </section>
      </div>

      <section>
        <TransactionHistory items={transactions} />
      </section>
    </>
  );
};

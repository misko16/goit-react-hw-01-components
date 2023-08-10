import React from 'react';

//---------FIRST_EXERCISE
import user from './components/data/user.json';
import Profile from './components/Profile';

//---------SECOND_EXERCISE
import Statistics from './components/Statistics';
import data from './components/data/data.json'

//---------THIRD_EXERCISE
import FriendsList from 'components/FriendsList';
import friendsData from "./components/data/friends.json"

//---------FOURTH_EXERCISE
import TransactionHistory from 'components/TransactionHistory';
import transactions from './components/data/transactions.json';

export const App = () => {
  return (
    <div> 
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
    
    <Statistics title="Statistics" stats={data} />
          
    <FriendsList friends={friendsData} /> 

    <TransactionHistory items={transactions}/>

    </div>
  );
};
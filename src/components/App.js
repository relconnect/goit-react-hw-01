import React from 'react';
import user from '../user.json';
import stats from '../stats.json';
import transactions from '../transactions.json';
import Profile from './Profile/Profile';
import pricingPlanItems from '../pricing-plan.json';
import UploadFileSection from './UploadFileSection/UploadFileSection';
import PricingPlan from './PricingPlan/PricingPlan';
import TransactionHistry from './TransactionHistory/TransactionHistory';

const App = () => (
  <div className="wrapper">
    <Profile items={user} />
    <UploadFileSection prop={stats} />
    <PricingPlan plans={pricingPlanItems} />
    <TransactionHistry items={transactions} />
  </div>
);

export default App;

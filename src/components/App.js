import React from "react";
import user from "../user.json";
import stats from "../stats.json";
import transactions from "../transactions.json";
import Profile from "./Profile/Profile";
import pricingPlanItems from '../pricing-plan.json';
import UploadFileSection from "./UploadFileSection/UploadFileSection";
import PricingPlan from '../components/PricingPlan/PricingPlan';
import TransactionHistry from '../components/TransactionHistory/TransactionHistory';

const App = () => (
  <>
    <Profile items={user} />
    <UploadFileSection prop={stats} />
    <PricingPlan plans={pricingPlanItems}/>
    <TransactionHistry items={transactions} />
  </>
);

export default App;

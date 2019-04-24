import React, { Fragment } from "react";
import user from "../user.json";
import stats from "../stats.json";
import Profile from "./Profile/Profile";
import UploadFileSection from "./UploadFileSection/UploadFileSection";

const App = () => (
  <Fragment>
    <Profile items={user} />
    <UploadFileSection prop={stats} />
  </Fragment>
);

export default App;

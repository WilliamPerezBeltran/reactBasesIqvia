import React from "react";
import { useState, useContext } from "react";

const MainProblem = () => {
  const [user, setUser] = useState("william");
  return (
    <div>
      <h2>useContext</h2>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </div>
  );
};

const Component2 = ({ user }) => {
  return (
    <div>
      <h1>Component2</h1>
      <h2>{`Hello ${user}!`}</h2>
      <Component3 user={user} />
    </div>
  );
};

const Component3 = ({ user }) => {
  return (
    <div>
      <h1>Component3</h1>
      <h2>{`Hello ${user}!`}</h2>
      <Component4 user={user} />
    </div>
  );
};

const Component4 = ({ user }) => {
  return (
    <div>
      <h1>Component4</h1>
      <h2>{`Hello ${user}!`}</h2>
    </div>
  );
};
export default MainProblem;

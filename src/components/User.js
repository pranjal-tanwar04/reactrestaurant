import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  useEffect(() => {
    //api calls
      const timer=setInterval(() => {
          // console.log("Namaste react op");
        }, 1000);

    // console.log("use effect");

    return () => {
      // console.log("use effect return");
    };
  }, []);

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>count = {count}</h1>
      <h1>count2 = {count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location:Delhi</h3>
      <h4>contact:@pranjal04</h4>
    </div>
  );
};

export default User;

import React, { useRef } from "react";
import { Input, Button } from "antd";

const TabA = () => {
  const usernameElement = useRef(null);
  const passwordElement = useRef(null);

  const handleSubmit = () => {
    console.log("🚀 ~ file: TabA.jsx ~ TabA ~ handleSubmit", {
      username: usernameElement.current,
      password: passwordElement.current,
    });
  };

  return (
    <div>
      TabA
      <Input type="text" name="usename" ref={usernameElement} />
      <input
        type="password"
        name="password"
        ref={passwordElement}
        style={{ margin: "16px 0" }}
      />
      <Button onClick={() => handleSubmit()}>Submit</Button>
    </div>
  );
};

export default TabA;

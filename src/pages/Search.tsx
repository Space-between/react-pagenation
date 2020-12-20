import React from "react";
import { Input } from "antd";

const { Search } = Input;
const onSearch = (value: any) => console.log(value);

export default () => {
  return (
    <div>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  );
};

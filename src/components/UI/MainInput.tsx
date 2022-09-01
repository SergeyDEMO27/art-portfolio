import React from "react";

interface MainInputProps {
  value: string;
  changeValue: React.ChangeEventHandler;
}

const MainInput: React.FC<MainInputProps> = ({ value, changeValue }) => {
  return (
    <input
      onChange={changeValue}
      type='text'
      value={value}
      placeholder='search'
    ></input>
  );
};

export default MainInput;

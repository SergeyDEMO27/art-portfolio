import React from "react";
import { ISelectOpt } from "../../types/types";

interface MainFilterProps {
  options: ISelectOpt[];
  selectOptHandler: React.ChangeEventHandler;
}

const MainSelect: React.FC<MainFilterProps> = ({
  options,
  selectOptHandler,
}) => {
  return (
    <select onChange={selectOptHandler} name='select' id=''>
      <option value='' disabled>
        Sort by
      </option>
      {options.map(({ name, value }) => (
        <option value={value} key={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default MainSelect;

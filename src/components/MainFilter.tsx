import React from "react";
import MainSelect from "./UI/MainSelect";
import MainInput from "./UI/MainInput";
import { ISelectOpt, IFilter } from "./../types/types";

interface MainFilterProps {
  filter: IFilter;
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

const MainFilter: React.FC<MainFilterProps> = ({ filter, setFilter }) => {
  const selectOpts: Array<ISelectOpt> = [
    { value: "nameUp", name: "name up" },
    { value: "nameDown", name: "name down" },
    { value: "type", name: "type" },
    { value: "price", name: "price" },
  ];

  const selectOptHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilter({ ...filter, selectedOpt: e.target.value });
  };

  const searchValueHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter({ ...filter, searchVal: e.target.value });
  };

  return (
    <div className='main-filter'>
      <MainInput changeValue={searchValueHandler} value={filter.searchVal} />
      <MainSelect selectOptHandler={selectOptHandler} options={selectOpts} />
    </div>
  );
};

export default MainFilter;

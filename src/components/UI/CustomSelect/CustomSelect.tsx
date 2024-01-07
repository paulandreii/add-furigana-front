/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FC } from 'react';
import { SelectOption } from '../../../store/model/selectOption';

const CustomSelect: FC<{
  setValue: (selectedValue: any) => void;
  optionList: SelectOption[];
  defaultValue: any;
}> = (props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.setValue(event.target.value);
  };

  return (
    <>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        onChange={onChangeHandler}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {props.optionList.map((option) => {
          return <option value={option.key}>{option.value}</option>;
        })}
      </select>
    </>
  );
};

export default CustomSelect;

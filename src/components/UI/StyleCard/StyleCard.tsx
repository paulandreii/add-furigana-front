import { FC, PropsWithChildren } from 'react';
import { TypeSelectorData } from '../../../store/model/typeSelectorData';

const StyleCard: FC<
  PropsWithChildren<TypeSelectorData & { isSelected: boolean }>
> = (props) => {
  const backgroundClass = props.isSelected ? 'bg-slate-400' : 'bg-slate-600';

  return (
    <>
      <div
        onClick={() => props.updateFn(props.containerValue)}
        className={`container py-4 rounded-md hover:bg-slate-400 transition ease-in-out duration-300 cursor-pointer ${backgroundClass}`}
      >
        <label className="block mb-2 text-2xl font-medium text-gray-100 text-center cursor-pointer">
          {props.tile}
        </label>
        <div className="text-center text-md text-gray-100 font-medium px-12">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default StyleCard;

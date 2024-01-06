import { FC, PropsWithChildren } from 'react';

const StyleCard: FC<
  PropsWithChildren<{ tile: string; isSelected: boolean }>
> = (props) => {
  return (
    <>
      <div className="container px-4 py-4 mx-4 my-4 rounded-md bg-slate-600 relative hover:bg-slate-400 transition ease-in-out duration-300">
        <label className="block mb-2 text-2xl font-medium text-gray-100 text-center">
          {props.tile}
        </label>
        <div className="text-center text-md text-gray-400">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default StyleCard;

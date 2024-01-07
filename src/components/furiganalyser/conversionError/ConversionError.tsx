import { FC, PropsWithChildren } from 'react';

const ConversionError: FC<
  PropsWithChildren<{ backButtonClick: () => void }>
> = (props) => {
  return (
    <div className="container mx-auto px-6 py-6 shadow-2xl mt-11 rounded-xl bg-slate-900 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-gray-200">💣 Oops, something went wrong!</h1>
      <h1 className="text-xl mt-2 text-gray-200">
        Please, go back and try again
      </h1>
      <button
        type="button"
        onClick={props.backButtonClick}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mt-6 mb-6 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Back
      </button>
    </div>
  );
};

export default ConversionError;

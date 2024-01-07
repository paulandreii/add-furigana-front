import { FC, PropsWithChildren } from 'react';

const ConversionSuccess: FC<
  PropsWithChildren<{
    downloadButtonClick: () => void;
    backButtonClick: () => void;
  }>
> = (props) => {
  return (
    <div className="container mx-auto px-6 py-6 shadow-2xl mt-11 rounded-xl bg-slate-900 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-gray-200">🎉 Conversion done!</h1>
      <h1 className="text-xl mt-2 text-gray-200">
        You can download the converted file
      </h1>
      <div className="flex justify-center mt-6 mb-6">
        <button
          type="button"
          onClick={props.downloadButtonClick}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Download
        </button>
        <button
          type="button"
          onClick={props.backButtonClick}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ConversionSuccess;

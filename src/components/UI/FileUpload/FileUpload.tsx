import React from 'react';

const FileUpload: React.FC = () => {
  return (
    <>
      <div className="mt-5 mb-5">
        <label
          className="block mb-2 text-xl font-medium text-gray-200"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          type="file"
          name="file-input-medium"
          id="file-input-medium"
          className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-100 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600file:bg-gray-50 file:border-0 file:bg-gray-100 file:me-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-100 file:cursor-pointer file:transition ease-in-out duration-300 hover:file:bg-gray-600"
        />
        <p className="mt-1 text-sm text-gray-100" id="file_input_help">
          .epub, .mobi, .azw3.
        </p>
      </div>
    </>
  );
};

export default FileUpload;

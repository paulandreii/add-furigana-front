import React, { useContext, useState } from 'react';
import FileUpload from '../UI/FileUpload/FileUpload';
import TypeSelector from './typeSelector/TypeSelector';
import { FuriganalyserContext } from '../../store/furiganalyser.context';
import { TypeSelectorContent } from '../../store/model/typeSelectorContent';

import classes from './Furiganalyser.module.css';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import {
  getFuriganaSelectorOptions,
  getOutputFormatOptions,
  getWritingStyleOptions,
} from '../../store/helpers/furiganaContextHelper';

const Furiganalyser: React.FC = () => {
  const [showError, setShowError] = useState(false);

  const furiganalyserContext = useContext(FuriganalyserContext);
  const furiganaSelectorContent: TypeSelectorContent[] =
    getFuriganaSelectorOptions(furiganalyserContext);

  const writingSelectorContent: TypeSelectorContent[] = getWritingStyleOptions(
    furiganalyserContext,
    classes
  );

  const options = getOutputFormatOptions();

  const convertFileHandler = () => {
    if (!furiganalyserContext.ebook) setShowError(true);
    // Make api call to convert ebook, show spinner and download/error page
  };

  return (
    <>
      <section className="container mx-auto px-6 py-6 shadow-2xl mt-11 rounded-xl bg-slate-900 relative">
        <h1 className="font-semibold text-4xl text-gray-200">
          Select a EPUB, AZW3 or MOBI file
        </h1>
        <FileUpload
          showError={showError}
          setFile={furiganalyserContext.setFile}
        />
        <h1 className="font-semibold mt-6 mb-6 text-4xl text-gray-200">
          Furigana
        </h1>
        <TypeSelector selectionArray={furiganaSelectorContent} />
        <h1 className="font-semibold mt-6 mb-6 text-4xl text-gray-200">
          Writing style
        </h1>
        <TypeSelector selectionArray={writingSelectorContent} />
        <h1 className="font-semibold mt-6 mb-6 text-4xl text-gray-200">
          Output format
        </h1>
        <CustomSelect
          optionList={options}
          defaultValue={furiganalyserContext.outputFormat}
          setValue={furiganalyserContext.setOutputFormat}
        />
        <button
          type="button"
          onClick={convertFileHandler}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mt-6 mb-6 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Convert File
        </button>
      </section>
    </>
  );
};

export default Furiganalyser;

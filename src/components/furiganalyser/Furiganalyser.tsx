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
import ConversionError from './conversionError/ConversionError';
import ConversionSuccess from './conversionSuccess/ConversionSuccess';
import { useMutation } from '@tanstack/react-query';
import { convertFile } from '../../http/http';
import Spinner from '../UI/Spinner/Spinner';

const Furiganalyser: React.FC = () => {
  const [showError, setShowError] = useState(false);
  const [isConvertingPage, setIsConvertingPage] = useState(true);

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: convertFile,
    onSuccess: () => {
      //Setear file del context con el valor convertido
    },
  });

  const furiganalyserContext = useContext(FuriganalyserContext);
  const furiganaSelectorContent: TypeSelectorContent[] =
    getFuriganaSelectorOptions(furiganalyserContext);

  const writingSelectorContent: TypeSelectorContent[] = getWritingStyleOptions(
    furiganalyserContext,
    classes
  );

  const options = getOutputFormatOptions();

  const convertFileHandler = () => {
    if (!furiganalyserContext.ebook) {
      setShowError(true);
      return;
    }
    setIsConvertingPage(false);
    mutate();
  };

  const backHandler = () => {
    setIsConvertingPage(true);
    furiganalyserContext.setFile(undefined);
  };

  const downloadHandler = () => {};

  return (
    <>
      {isConvertingPage && (
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
      )}

      {!isConvertingPage && isPending && (
        <Spinner loadingText="Converting file..." />
      )}
      {!isConvertingPage && isError && (
        <ConversionError backButtonClick={backHandler} />
      )}
      {!isConvertingPage && isSuccess && (
        <ConversionSuccess
          downloadButtonClick={downloadHandler}
          backButtonClick={backHandler}
        />
      )}
    </>
  );
};

export default Furiganalyser;

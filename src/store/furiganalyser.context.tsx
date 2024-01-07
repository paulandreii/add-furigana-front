import React, { PropsWithChildren, useState } from 'react';
import { FuriganaStyle } from './model/furiganaStyle';
import { WritingStyle } from './model/writingStyle';
import { OutputFormat } from './model/outputFormat';

export type FuriganalyserContextObj = {
  ebook: File | undefined;
  furiganaStyle: FuriganaStyle;
  writingStyle: WritingStyle;
  outputFormat: OutputFormat;
  setFile: (file: File | undefined) => void;
  setFuriganaStyle: (furiganaStyle: FuriganaStyle) => void;
  setWritingStyle: (writingStyle: WritingStyle) => void;
  setOutputFormat: (outputFormat: OutputFormat) => void;
};

export const FuriganalyserContext =
  React.createContext<FuriganalyserContextObj>({
    ebook: undefined,
    furiganaStyle: 'Add',
    writingStyle: 'Horizontal',
    outputFormat: 'epub',
    setFile: () => {
      return;
    },
    setFuriganaStyle: () => {
      return;
    },
    setWritingStyle: () => {
      return;
    },
    setOutputFormat: () => {},
  });

const FuriganalyserContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [file, setFile] = useState<File>();
  const [furiganaStyle, setFuriganaStyle] = useState<FuriganaStyle>('Add');
  const [writingStyle, setWritingStyle] = useState<WritingStyle>('Horizontal');
  const [outputFormat, setOutputFormat] = useState<OutputFormat>('epub');

  const setFileHandler = (file: File | undefined) => {
    setFile(file);
  };

  const setFuriganaStyleHandler = (furiganaStyle: FuriganaStyle) => {
    setFuriganaStyle(furiganaStyle);
  };

  const setWritingStyleHandler = (writingStyle: WritingStyle) => {
    setWritingStyle(writingStyle);
  };

  const setOutputFormatHandler = (outputFormat: OutputFormat) => {
    setOutputFormat(outputFormat);
    console.log(outputFormat);
  };

  const contextValue: FuriganalyserContextObj = {
    ebook: file,
    furiganaStyle: furiganaStyle,
    writingStyle: writingStyle,
    outputFormat: outputFormat,
    setFile: setFileHandler,
    setFuriganaStyle: setFuriganaStyleHandler,
    setWritingStyle: setWritingStyleHandler,
    setOutputFormat: setOutputFormatHandler,
  };

  return (
    <FuriganalyserContext.Provider value={contextValue}>
      {props.children}
    </FuriganalyserContext.Provider>
  );
};

export default FuriganalyserContextProvider;

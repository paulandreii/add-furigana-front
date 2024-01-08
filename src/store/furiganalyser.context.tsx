import React, { PropsWithChildren, useState } from 'react';
import { FuriganaStyle } from './model/furiganaStyle';
import { WritingStyle } from './model/writingStyle';
import { OutputFormat } from './model/outputFormat';

export type FuriganalyserContextObj = {
  ebook: File | undefined;
  convertedFileId: string;
  furiganaStyle: FuriganaStyle;
  writingStyle: WritingStyle;
  outputFormat: OutputFormat;
  setFile: (file: File | undefined) => void;
  setFuriganaStyle: (furiganaStyle: FuriganaStyle) => void;
  setWritingStyle: (writingStyle: WritingStyle) => void;
  setOutputFormat: (outputFormat: OutputFormat) => void;
  setConvertedFile: (fileId: string) => void;
};

export const FuriganalyserContext =
  React.createContext<FuriganalyserContextObj>({
    ebook: undefined,
    convertedFileId: '',
    furiganaStyle: 'add',
    writingStyle: 'horizontal-tb',
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
    setOutputFormat: () => {
      return;
    },
    setConvertedFile: () => {
      return;
    },
  });

const FuriganalyserContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [file, setFile] = useState<File>();
  const [convertedFileId, setConvertedFileId] = useState<string>('');
  const [furiganaStyle, setFuriganaStyle] = useState<FuriganaStyle>('add');
  const [writingStyle, setWritingStyle] =
    useState<WritingStyle>('horizontal-tb');
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
  };

  const setConvertedFileIdHandler = (fileId: string) => {
    setConvertedFileId(fileId);
  };

  const contextValue: FuriganalyserContextObj = {
    ebook: file,
    convertedFileId: convertedFileId,
    furiganaStyle: furiganaStyle,
    writingStyle: writingStyle,
    outputFormat: outputFormat,
    setFile: setFileHandler,
    setFuriganaStyle: setFuriganaStyleHandler,
    setWritingStyle: setWritingStyleHandler,
    setOutputFormat: setOutputFormatHandler,
    setConvertedFile: setConvertedFileIdHandler,
  };

  return (
    <FuriganalyserContext.Provider value={contextValue}>
      {props.children}
    </FuriganalyserContext.Provider>
  );
};

export default FuriganalyserContextProvider;

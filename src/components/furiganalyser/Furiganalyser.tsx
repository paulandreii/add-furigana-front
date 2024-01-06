import React, { useContext } from 'react';
import FileUpload from '../UI/FileUpload/FileUpload';
import TypeSelector from './furiganaTypeSelector/TypeSelector';
import { FuriganalyserContext } from '../../store/furiganalyser.context';
import { TypeSelectorContent } from '../../store/model/typeSelectorContent';

import classes from './Furiganalyser.module.css';

const Furiganalyser: React.FC = () => {
  const furiganalyserContext = useContext(FuriganalyserContext);
  const furiganaSelectorContent: TypeSelectorContent[] = [
    {
      tile: 'Add',
      containerValue: 'Add',
      updateFn: furiganalyserContext.setFuriganaStyle,
      typeOfStyle: furiganalyserContext.furiganaStyle,
      innerContent: (
        <>
          <ruby>
            次<rt>つぎ</rt>
          </ruby>
          の
          <ruby>
            駅<rt>ステーション</rt>
          </ruby>
        </>
      ),
    },
    {
      tile: 'Override',
      containerValue: 'Override',
      updateFn: furiganalyserContext.setFuriganaStyle,
      typeOfStyle: furiganalyserContext.furiganaStyle,
      innerContent: (
        <>
          <ruby>
            次<rt>つぎ</rt>
          </ruby>
          の
          <ruby>
            駅<rt>えき</rt>
          </ruby>
        </>
      ),
    },
    {
      tile: 'Remove',
      containerValue: 'Remove',
      updateFn: furiganalyserContext.setFuriganaStyle,
      typeOfStyle: furiganalyserContext.furiganaStyle,
      innerContent: <>次の駅</>,
    },
  ];

  const writingSelectorContent: TypeSelectorContent[] = [
    {
      tile: 'Horizontal',
      containerValue: 'Horizontal',
      updateFn: furiganalyserContext.setWritingStyle,
      typeOfStyle: furiganalyserContext.writingStyle,
      innerContent: (
        <>
          <div className={classes.horizontal}>
            <p>次の駅で</p>
            <p>降りた。</p>
            <p>↓</p>
          </div>
        </>
      ),
    },
    {
      tile: 'Vertical, Right to Reft',
      containerValue: 'VerticalRL',
      updateFn: furiganalyserContext.setWritingStyle,
      typeOfStyle: furiganalyserContext.writingStyle,
      innerContent: (
        <>
          <div className={classes.verticalRL}>
            <p>次の駅で</p>
            <p>降りた。</p>
            <p>↓</p>
          </div>
        </>
      ),
    },
    {
      tile: 'Vertical, Left to Right',
      containerValue: 'VerticalLR',
      updateFn: furiganalyserContext.setWritingStyle,
      typeOfStyle: furiganalyserContext.writingStyle,
      innerContent: (
        <>
          <div className={classes.verticalLR}>
            <p>次の駅で</p>
            <p>降りた。</p>
            <p>↑</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <section className="container mx-auto px-6 py-6 shadow-2xl mt-11 rounded-md bg-slate-900 relative">
        <h1 className="font-semibold text-4xl text-gray-200">
          Select a EPUB, AZW3 or MOBI file
        </h1>
        <FileUpload />
        <h1 className="font-semibold mt-6 mb-6 text-4xl text-gray-200">
          Furigana
        </h1>
        <TypeSelector selectionArray={furiganaSelectorContent} />
        <h1 className="font-semibold mt-6 mb-6 text-4xl text-gray-200">
          Writing style
        </h1>
        <TypeSelector selectionArray={writingSelectorContent} />
      </section>
    </>
  );
};

export default Furiganalyser;

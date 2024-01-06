import React from 'react';
import FileUpload from '../UI/FileUpload/FileUpload';
import StyleCard from '../UI/StyleCard/StyleCard';

//import classes from './Home.module.css';

const Furiganalyser: React.FC = () => {
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
        <div className="flex justify-between">
          <StyleCard tile="Add" isSelected={false}>
            <ruby>
              次<rt>つぎ</rt>
            </ruby>
            の
            <ruby>
              駅<rt>ステーション</rt>
            </ruby>
          </StyleCard>
          <StyleCard tile="Override" isSelected={false}>
            <ruby>
              次<rt>つぎ</rt>
            </ruby>
            の
            <ruby>
              駅<rt>えき</rt>
            </ruby>
          </StyleCard>
          <StyleCard tile="Remove" isSelected={false}>
            次の駅
          </StyleCard>
        </div>
      </section>
    </>
  );
};

export default Furiganalyser;

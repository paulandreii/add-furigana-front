import { ReactNode } from 'react';
import { TypeSelectorData } from './typeSelectorData';
import { FuriganaStyle } from './furiganaStyle';
import { WritingStyle } from './writingStyle';

export interface TypeSelectorContent extends TypeSelectorData {
  innerContent: ReactNode;
  typeOfStyle: FuriganaStyle | WritingStyle;
}

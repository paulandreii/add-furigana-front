/* eslint-disable @typescript-eslint/no-explicit-any */
import { FuriganaStyle } from './furiganaStyle';
import { WritingStyle } from './writingStyle';

export type TypeSelectorData = {
  tile: string;
  containerValue: FuriganaStyle | WritingStyle;
  updateFn: (value: any) => void;
};

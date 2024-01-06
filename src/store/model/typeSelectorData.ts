import { FuriganaStyle } from './furiganaStyle';
import { OutputFormat } from './outputFormat';
import { WritingStyle } from './writingStyle';

export type TypeSelectorData = {
  tile: string;
  containerValue: FuriganaStyle | OutputFormat | WritingStyle;
  updateFn: (value: any) => void;
};

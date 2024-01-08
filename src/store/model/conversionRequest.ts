import { FuriganaStyle } from './furiganaStyle';
import { OutputFormat } from './outputFormat';
import { WritingStyle } from './writingStyle';

export interface ConversionRequest {
  file: File;
  furigana_mode: FuriganaStyle;
  writing_mode: WritingStyle;
  of: OutputFormat;
  redirect: boolean;
}

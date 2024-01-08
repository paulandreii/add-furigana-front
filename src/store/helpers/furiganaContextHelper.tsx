import { FuriganalyserContextObj } from '../furiganalyser.context';
import { TypeSelectorContent } from '../model/typeSelectorContent';

export function getFuriganaSelectorOptions(
  furiganalyserContext: FuriganalyserContextObj
) {
  const furiganaSelectorContent: TypeSelectorContent[] = [
    {
      tile: 'Add',
      containerValue: 'add',
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
      containerValue: 'replace',
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
      containerValue: 'remove',
      updateFn: furiganalyserContext.setFuriganaStyle,
      typeOfStyle: furiganalyserContext.furiganaStyle,
      innerContent: <>次の駅</>,
    },
  ];

  return furiganaSelectorContent;
}

export function getWritingStyleOptions(
  furiganalyserContext: FuriganalyserContextObj,
  classes: CSSModuleClasses
) {
  const writingSelectorContent: TypeSelectorContent[] = [
    {
      tile: 'Horizontal',
      containerValue: 'horizontal-tb',
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
      containerValue: 'vertical-rl',
      updateFn: furiganalyserContext.setWritingStyle,
      typeOfStyle: furiganalyserContext.writingStyle,
      innerContent: (
        <>
          <div className="flex justify-end">
            <div className={classes.verticalRL}>
              <p>次の駅で</p>
              <p>降りた。</p>
              <p>↓</p>
            </div>
          </div>
        </>
      ),
    },
    {
      tile: 'Vertical, Left to Right',
      containerValue: 'vertical-lr',
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

  return writingSelectorContent;
}

export function getOutputFormatOptions() {
  return [
    { key: 'epub', value: 'EPUB' },
    { key: 'azw3', value: 'AZW3' },
    { key: 'mobi', value: 'MOBI' },
    { key: 'many_txt', value: 'Many text files (one per book part)' },
    { key: 'single_txt', value: 'Single text file' },
    { key: 'apkg', value: 'Anki Deck (each sentence as a card)' },
    { key: 'html', value: 'HTML (readable in web browser)' },
  ];
}

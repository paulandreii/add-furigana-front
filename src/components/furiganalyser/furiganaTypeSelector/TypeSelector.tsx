import { FC } from 'react';
import StyleCard from '../../UI/StyleCard/StyleCard';
import { TypeSelectorContent } from '../../../store/model/typeSelectorContent';

const TypeSelector: FC<{ selectionArray: TypeSelectorContent[] }> = (props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {props.selectionArray.map((styleCardData) => {
        return (
          <>
            <StyleCard
              tile={styleCardData.tile}
              containerValue={styleCardData.containerValue}
              updateFn={styleCardData.updateFn}
              isSelected={
                styleCardData.typeOfStyle === styleCardData.containerValue
              }
            >
              {styleCardData.innerContent}
            </StyleCard>
          </>
        );
      })}
    </div>
  );
};

export default TypeSelector;

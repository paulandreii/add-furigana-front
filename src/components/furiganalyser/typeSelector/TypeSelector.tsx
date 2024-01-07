import { FC } from 'react';
import StyleCard from '../../UI/StyleCard/StyleCard';
import { TypeSelectorContent } from '../../../store/model/typeSelectorContent';
import CustomRowsGrid from '../../UI/CustomRowsGrid/CustomRowsGrid';

const TypeSelector: FC<{ selectionArray: TypeSelectorContent[] }> = (props) => {
  return (
    <CustomRowsGrid numberOfColumns={props.selectionArray.length}>
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
    </CustomRowsGrid>
  );
};

export default TypeSelector;

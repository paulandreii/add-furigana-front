import { CSSProperties, FC, PropsWithChildren } from 'react';

const CustomRowsGrid: FC<PropsWithChildren<{ numberOfColumns: number }>> = (
  props
) => {
  const gridStyles: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${props.numberOfColumns}, minmax(0, 1fr))`,
    gap: '1rem',
  };

  return <div style={gridStyles}>{props.children}</div>;
};

export default CustomRowsGrid;

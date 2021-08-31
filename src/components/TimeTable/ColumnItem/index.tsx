import React from 'react';
import type { ColumnItem as ColumnItemType } from '../../../types';

import ColumnItemItemWrapper from './wrapper';

type Props = {
  /** De item die in het kolom weergegeven moet worden */
  item: ColumnItemType
}

const ColumnItem = ({ item }: Props) => (
    <ColumnItemItemWrapper>
        {item ? (
            <>
                <h2>Dit is een item</h2>
            </>
        ) : null}
    </ColumnItemItemWrapper>
);

export default ColumnItem;

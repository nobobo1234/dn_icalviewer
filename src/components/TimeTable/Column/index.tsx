import React from 'react';
import moment from 'moment';
import { ColumnItem as ColumnItemType } from '../../../types';

import ColumnWrapper from './wrapper';
import ColumnHeader from './header';
import ColumnItem from '../ColumnItem';

type Props = {
  /** De datum die bovenaan de kolom weergegeven moet worden */
  date: Date;
  /** De items die in de kolom zitten. Hier zitten ook lege dagen tussen */
  items: ColumnItemType[]
}

/**
 * Dit component bevat de logica die een kolom opbouwt.
 * De header wordt hier geprint en alle items die van de `TimeTable` komen.
 */
const Column = ({ date, items }: Props) => (
    <ColumnWrapper>
        <ColumnHeader>{moment(date).format('dddd, MMMM D')}</ColumnHeader>
        {items.map((e) => (
            <ColumnItem item={e} />
        ))}
    </ColumnWrapper>
);

export default Column;

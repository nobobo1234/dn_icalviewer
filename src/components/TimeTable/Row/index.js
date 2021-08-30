import React from "react";
import moment from "moment";

import RowWrapper from "./wrapper";
import RowHeader from "./header";
import RowItem from "../RowItem";

const Row = ({ props }) => {
  const { date, items } = props;

  return (
    <RowWrapper>
      <RowHeader>{moment(date).format("dddd, MMMM D")}</RowHeader>
      {items.map((e) => (
        <RowItem item={e} />
      ))}
    </RowWrapper>
  );
};

export default Row;

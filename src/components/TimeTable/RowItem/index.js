import React from "react";
import moment from "moment";

import RowItemWrapper from "./wrapper";

const RowItem = ({ props }) => {
  const { item } = props;

  return (
    <RowItemWrapper>
      {item.length > 0 ? (
        <>
          <h2>Dit is een item</h2>
        </>
      ) : null}
    </RowItemWrapper>
  );
};

export default RowItem;

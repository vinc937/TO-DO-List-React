import React from "react";

function Item(props) {
  return (
    <li
      onClick={() => {
        props.onCheckedOff(props.id);
      }}
    >
      {props.task}
    </li>
  );
}

export default Item;

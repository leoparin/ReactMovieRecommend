import React, { Component, createFactory } from 'react';

const ListGroup =({ items ,onItemSelect,valuePropty,textPropty,selectedGenre }) => {
    
    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
                key={ item[valuePropty]}
                onClick={() => onItemSelect(item)}
                className={
                    selectedGenre === item? "list-group-item active":"list-group-item "}
          >
            {item[textPropty]}
          </li>
        ))}
      </ul>
    );
}

ListGroup.defaultProps = {
    valuePropty:"_id",
    textPropty:"name"
}
 
export default ListGroup;
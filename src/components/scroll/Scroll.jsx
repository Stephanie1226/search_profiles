import React from 'react';
import './Scroll.styles.css';

const Scroll = (props) => {
  return (
    <div className="scroll-container">
      {props.children}
    </div>
  );
};

export default Scroll;
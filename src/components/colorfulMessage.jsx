import React from 'react';

export const ColorfulMessage = (props) => {
  const {color, fontSize, children} = props;

  const contentStyle = {color,fontSize}

  return(
    <p style={contentStyle}>{children}</p>
  );
};


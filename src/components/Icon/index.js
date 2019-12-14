import React from 'react';

type Props = {
  children: String,
  className: String,
};

const Icon = (props: Props) => {
  const { children, className } = props;
  return <span role="img" className={className}>{children}</span>;
};

export default Icon;

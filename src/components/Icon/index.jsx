import React from 'react';

type Props = {
  children: String,
  className: String,
};

const Icon = (props: Props) => {
  const { children, className } = props;
  return <i className={className}>{children}</i>;
};

export default Icon;

// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  title: String,
  background: String,
};

const Button = (props: Props) => {
  const { title, background } = props;

  const StyledButton = styled.button`
    background: ${background};
  `;

  return <StyledButton>{title}</StyledButton>;
};

export default Button;

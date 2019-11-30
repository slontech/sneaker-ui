import React from 'react';
import { Button } from '../index';

export default { title: 'Buttons' };

export const withTitle = () => <Button title="Hello, World!" background="#ffaa67"/>;
export const noTitle = () => <Button title="" background="#ffaa67"/>;

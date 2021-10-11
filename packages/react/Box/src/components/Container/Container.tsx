import React from 'react';
import { IContainer } from './container.types';
import { Styling } from './container.variants';

const Container: React.FC<IContainer> = ({ children }) => (
  <Styling>{children}</Styling>
);

export default Styling;

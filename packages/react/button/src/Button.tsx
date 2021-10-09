import * as React from 'react';

import { IButton } from './button.types';
import { Styling } from './button.variants';

const Button: React.FC<IButton>  = ({ children}) => (
  <Styling appearance="primary">
    {children}
  </Styling>
);


export default Button;

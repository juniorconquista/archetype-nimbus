import * as React from 'react';

import { IButton } from './button.types';
import { Styling } from './button.variants';

const Button: React.FC<IButton> = ({ children, appearance, weight }) => (
  <Styling appearance={appearance} weight={weight}>
    {children}
  </Styling>
);


export default Button;

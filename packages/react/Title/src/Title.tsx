import * as React from 'react';

import { ITitle } from './title.types';
import { Styling } from './title.variants';

const Title: React.FC<ITitle>  = ({ children, type }) => (
  <Styling type={type} as={type}>
    {children}
  </Styling>
);


export default Title;

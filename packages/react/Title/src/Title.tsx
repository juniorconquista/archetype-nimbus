import * as React from 'react';

import { ITitle } from './title.types';
import { Styling } from './title.variants';

const Title: React.FC<ITitle>  = ({ children}) => (
  <Styling type="h3">
    {children}
  </Styling>
);


export default Title;

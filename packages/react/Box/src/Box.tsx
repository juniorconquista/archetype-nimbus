import * as React from 'react';

import { IBox } from './box.types';
import { Styling } from './box.variants';

const Box: React.FC<IBox> = ({ children }) => <Styling>{children}</Styling>;

export default Styling;

import * as React from 'react';

import { IText } from './text.types';
import { Styling } from './text.variants';

const Text: React.FC<IText> = ({ children }) => <Styling>{children}</Styling>;

export default Styling;

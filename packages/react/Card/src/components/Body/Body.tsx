import React from 'react';

import Text from '../../../../Text/src/Text';
import { IBody } from './body.types';

const Body: React.FC<IBody> = ({ message, children }) => (
  <div>
    {message && <Text>{message}</Text>}
    {children}
  </div>
);

export default Body;

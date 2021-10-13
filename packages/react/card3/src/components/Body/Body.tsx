//@ts-ignore
import React from 'react';

//@ts-ignore
import { Text } from '@tiendanube/components';
import { IBody } from './body.types';
import './body.styled.ts';

const Body: React.FC<IBody> = ({ message, children }) => {
  return (
    <div  className="card--body__content">
      {message && <Text>{message}</Text>}
      {children}
    </div>
  );
};

export default Body;

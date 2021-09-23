//@ts-ignore
import React from 'react';
//@ts-ignore
import { Title } from '@tiendanube/components';

import { IHeader } from './header.types';
import './header.styled.ts';

const Header: React.FC<IHeader> = ({ title, children}) => (
  <div className="card--header__content">
    {title && <Title type="h3">{title}</Title>}
    {children}
  </div>
);

export default Header;

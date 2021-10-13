import React from 'react';

import Title from '../../../../Title/src/Title'

import { IHeader } from './header.types';


const Header: React.FC<IHeader> = ({ title, children}) => (
  <div>
    {title && <Title type="h3">{title}</Title>}
    {children}
  </div>
);

export default Header;

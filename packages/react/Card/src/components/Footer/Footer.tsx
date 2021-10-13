
import React from 'react';
import { IFooter } from './footer.types';

const Footer: React.FC<IFooter> = ({ children }) => (
  <div>
    {children}
  </div>
);

export default Footer;

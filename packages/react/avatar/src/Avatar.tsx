//@ts-ignore
import * as React from 'react';

import { IAvatar } from './avatar.types';

const Avatar: React.FC<IAvatar>  = ({ children}: IAvatar) => (
  <div className="avatar__container">
    {children}
  </div>
);


export default Avatar;

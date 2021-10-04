//@ts-ignore


import * as React from 'react';

import { Header, Body, Footer } from './components';
import { ICard, ICardComponents } from './card.types';

const Card: React.FC<ICard> & ICardComponents = ({ children }: ICard) => (
  <div className="card__container">
    {children}
  </div>
);


Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

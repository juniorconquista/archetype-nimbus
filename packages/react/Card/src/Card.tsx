import * as React from 'react';
import { Styled } from './card.variants'

import { Header, 
  Body, 
  Footer
 } from './components';
import { ICard, ICardComponents } from './card.types';

const Card: React.FC<ICard> & ICardComponents = ({ children }: ICard) => (
  <Styled>{children}</Styled>
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

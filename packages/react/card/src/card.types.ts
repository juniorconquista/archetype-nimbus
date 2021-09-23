import { Header, Body, Footer } from './components';

export interface ICardComponents {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
}

export interface ICard {
  className?: string;
  //@ts-ignore
  children?: React.ReactNode | React.ReactNode[];
}

import { 
  Header,
  Body,
  Footer 
} from './components';

export interface ICardComponents {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
}

export interface ICard {
  children?: React.ReactNode | React.ReactNode[];
}

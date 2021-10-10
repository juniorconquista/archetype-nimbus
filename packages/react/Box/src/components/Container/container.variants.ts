import { styled } from '../../../../../../stitches.config';

const variants = {
  display: 'flex',
  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      row2: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      },
      column2: {
        flexDirection: 'column'
      }
    }
  },
  defaultVariants: {
    direction: 'row'
  }
};

export const Styling = styled('div', variants);

import { styled } from '../../../../stitches.config';

const sizes = {
  '100': { width: '100%' },
  '90': { width: '90%' },
  '80': { width: '80%' },
  '70': { width: '70%', backgroundColor: 'red' },
  '60': { width: '60%' },
  '50': { width: '50%' },
  '40': { width: '40%' },
  '30': { width: '30%', backgroundColor: 'blue' },
  '20': { width: '20%' },
  '10': { width: '10%' }
};

const variants = {
  variants: {
    width: sizes
  },
  defaultVariants: {
    width: '100'
  }
};

export const Styling = styled('div', variants);

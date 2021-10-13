import { styled } from '../../../../stitches.config';

export const Styling = styled('p', {
  fontFamily: '$font-base',
  variants: {
    appearance: {
      default: {
        color: '$color-secondary'
      },
      primary: {
        color: '$color-primary-pure'
      }
    },
    weight: {
      bold: {
        fontWeight: '$font-weight-bold'
      },
      regular: {
        fontWeight: '$font-weight-regular'
      }
    },
    block: {
      true: {
        display: 'block'
      }
    },
    background: { true: {} }
  },

  defaultVariants: {
    weight: 'regular',
    appearance: 'default'
  },

  compoundVariants: [
    {
      appearance: 'primary',
      background: true,
      css: {
        color: '$color-secondary',
        padding: '$space-small',
        borderRadius: '$radii-x-small',
        backgroundColor: '$color-primary-light'
      }
    },
    {
      appearance: 'default',
      background: true,
      css: {
        color: '$color-secondary',
        padding: '$space-small',
        borderRadius: '$radii-x-small',
        backgroundColor: '$color-grey-0'
      }
    }
  ]
});

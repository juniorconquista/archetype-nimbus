import { styled } from '../../../../stitches.config'

const variants = {
    backgroundColor: '$color-default',
    color: '$color-secondary',
    borderStyle: 'solid',
    borderColor: '$color-default',
    borderWidth: '$border-width-xx-small',
    borderRadius: '$radii-x-small',
    fontFamily: '$font-base',
    fontSize: '$font-size-medium',
    padding: '$space-x-small $space-small',
    cursor: 'pointer',
    display: 'inline-flex',
    textAlign: 'center',
    variants: {
        weight: {
            bold: {
                fontWeight: '$font-weight-bold'
            }
        }
    },
    defaultVariants: {
        weight: 'bold'
    }
};

export const Styling = styled('button', variants);
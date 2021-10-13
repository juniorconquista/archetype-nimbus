import { styled } from '../../../../stitches.config'

const variants = {
    fontFamily: '$font-base',
    textAlign: 'left',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: 0,
    variants: {
        type: {
            h3: {
                fontWeight: '$font-weight-bold',
                fontSize: '1.25rem',
                lineHeigth: '$line-height-medium'
            }
        },
        color: {
            secondary: {
                color: '$color-secondary'
            } 
        }
    },
    defaultVariants: {
        type: 'h1',
        color: 'secondary'
    }
};

export const Styling = styled('h1', variants);
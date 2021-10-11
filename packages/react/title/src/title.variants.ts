import { styled } from '../../../../stitches.config'

const variants = {
    fontFamily: '$font-base',
    textAlign: 'left',
    variants: {
        type: {
            h1: {
                
            }
        },
    },
    defaultVariants: {
        type: 'h1',
    }
};

export const Styling = styled('text', variants);
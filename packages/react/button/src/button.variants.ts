import { styled } from '../../../../stitches.config'

const variants = {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderWidth: '$border-width-xx-small',
    borderRadius: '$radii-x-small',
    fontFamily: '$font-base',
    fontSize: '$font-size-medium',
    padding: '$space-x-small $space-small',
    lineHeight: '$line-height-medium',
    cursor: 'pointer',
    display: 'inline-flex',
    textAlign: 'center',
    variants: {
        appearance: {
            default: {
                backgroundColor: '$color-default',
                color: '$color-secondary',
                '&:hover': {
                    //TODO: alter darker to sass
                    borderColor: '#d3d1d3',
                    backgroundColor: '#d3d1d3'
                }
            },
            primary: {
                backgroundColor: '$color-primary-pure',
                color: '$color-white',
                '&:hover': {
                    //TODO: alter darker to sass
                    borderColor: '#0257a2',
                    backgroundColor: '#0257a2'
                }
            }
        },
        weight: {
            bold: {
                fontWeight: '$font-weight-bold'
            }, 
            regular: {
                fontWeight: '$font-weight-regular'
            }
        }
    },
    defaultVariants: {
        weight: 'bold',
        appearance: 'default'
    }
};

export const Styling = styled('button', variants);
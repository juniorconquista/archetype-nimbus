import { styled } from '../../../../stitches.config'

const variants = {
    backgroundColor: '$color-background',
    padding: '$space-x-small',
    borderWidth: '$border-width-xx-small',
    borderRadius: '$radii-x-small',
    borderColor:'$color-default',
    borderStyle: 'solid',
    boxSizing: 'border-box',
    width: '100%'
}

export const Styled = styled('div', variants);
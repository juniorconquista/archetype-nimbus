import { createStitches } from '@stitches/react';
import { color, spacing } from '@tiendanube/design-tokens-nimbus/dist/js/tokens'


export const { styled, css } = createStitches({
    theme: {
      radii: {
        'radii-x-small': spacing['x-small'].value
      },
      space: {
        'space-x-small': spacing['x-small'].value
      },
      borderWidths: {
        'border-width-xx-small': '1px'
      },
      colors: {
        'color-background': color.white.value,
        'color-default': color.grey[25].value,
        'color-secondary': color.blue['dark-pure'].value
      }
    }
});
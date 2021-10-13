//@ts-ignore
import React from 'react';

//@ts-ignore
import { Button, Stack } from '@tiendanube/components';

import { IFooter } from './footer.types';
import './footer.styled.ts';

const Footer: React.FC<IFooter> = ({ children,  primaryButton, secondaryButton}) => (
  <div className="card--footer__content">
    {(primaryButton || secondaryButton) && (
      <Stack spacing="tight">
        {secondaryButton && (
          <Stack.Item>
            <Button>Secondary</Button>
          </Stack.Item>
        )}
        {primaryButton && (
          <Stack.Item>
            <Button appearance="primary">Primary</Button>
          </Stack.Item>
        )}
      </Stack>
    )}
    {children}
  </div>
);

export default Footer;

import { createPortal } from 'react-dom';
import { isValidElement } from 'react';

export interface PortalProps extends React.PropsWithChildren {
  /**
   * The DOM element to portal the children into.
   * @default document.body
   */
  container?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = ({
  children,
  container = globalThis?.document?.body,
}) => {
  if (isValidElement(children) && container)
    return createPortal(children, container);
  return null;
};

import { cloneElement, forwardRef, isValidElement } from 'react';
import { composeProps, composeRef } from '@nostyle/compose';

export interface SlotProps extends React.HtmlHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Slot = forwardRef<HTMLElement, SlotProps>(
  (props, forwardedRef) => {
    const { children, ...slotProps } = props;

    if (isValidElement(children)) {
      return cloneElement(children, {
        ...composeProps(slotProps, children.props),
        ref: composeRef([forwardedRef, (children as any).ref]),
      } as any);
    }

    return null;
  }
);

Slot.displayName = 'Slot';

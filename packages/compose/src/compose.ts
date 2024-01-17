import type { MutableRefObject } from 'react';

type AnyProps = Record<string, any>;

export const composeProps = (slotProps: AnyProps, childProps: AnyProps) => {
  const overrideProps = { ...childProps };

  Object.keys(childProps).forEach(propName => {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[a-z]/i.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === 'style') {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === 'className') {
      overrideProps[propName] = [slotPropValue, childPropValue]
        .filter(Boolean)
        .join(' ');
    }
  });

  const props = { ...slotProps, ...overrideProps };
  delete props.asChild;
  return props;
};

const setRef = <TInstance>(ref: React.Ref<TInstance>, instance: TInstance) => {
  const mutableRef = ref as MutableRefObject<TInstance>;
  if (ref instanceof Function) {
    ref(instance);
  } else if (ref != null) {
    mutableRef.current = instance;
  }
};

export const composeRef = <TInstance>(refs: React.Ref<TInstance>[]) => {
  return (instance: TInstance | null) =>
    refs.forEach(ref => setRef(ref, instance));
};

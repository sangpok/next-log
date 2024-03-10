'use client';

import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import styles from './Button.module.scss';
import cn from 'classnames';

type ButtonProp = {
  as: 'filled' | 'outline';
};

export function Button({
  as,
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProp & ComponentPropsWithoutRef<'button'>>) {
  const isFfilled = as == 'filled';
  const isOutline = as == 'outline';

  return (
    <button
      className={cn(styles.button, className, {
        [styles.filled]: isFfilled,
        [styles.outline]: isOutline,
      })}
      {...props}
    >
      {children}
    </button>
  );
}

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 active:bg-indigo-600',
        secondary:
          'text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 active:bg-indigo-500',
        destructive:
          'text-white bg-rose-700 hover:bg-rose-600 focus:outline-2 focus:outline-offset-2 focus:outline-rose-600 active:bg-rose-600',
        outline:
          'text-indigo-700 hover:text-indigo-600 focus:text-indigo-600 border-2 border-indigo-700 hover:border-indigo-600 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600',
        ghost:
            'bg-neutral-200 hover:bg-neutral-100',
        link:
            'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'text-base h-9 px-4 py-2',
        sm: 'text-sm h-8 rounded-md px-3 text-xs',
        lg: 'text-lg h-10 rounded-md px-8',
        icon: 'text-sm size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    iconRight?: React.ReactNode;
  } & VariantProps<typeof buttonVariants> & {
    iconLeft?: React.ReactNode;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, iconRight, iconLeft, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        {iconRight && <span className="mr-1">{iconRight}</span>}
        <span className="mx-2">{children}</span>
        {iconLeft && <span className="ml-1">{iconLeft}</span>}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

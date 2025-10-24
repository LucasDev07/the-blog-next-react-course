import clsx from 'clsx';
import { useId } from 'react';

type InputTextProps = {
  labelText?: string;
  type?: 'checkbox';
} & React.ComponentProps<'input'>;

export function InputCheckBox({
  labelText = '',
  type = 'checkbox',
  ...props
}: InputTextProps) {
  const id = useId();

  return (
    <div className='flex items-center gap-3'>
      <input
        {...props}
        className={clsx(
          'w-h h-4 outline-none focus:ring-2 focus:ring-blue-500  ',
          props.className,
        )}
        id={id}
        type={type}
      />

      {labelText && (
        <label className='text-sm' htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
}

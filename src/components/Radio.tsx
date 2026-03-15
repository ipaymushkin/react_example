import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Текст рядом с радио-кнопкой
  label?: string;
}

/**
 * Компонент радио-кнопки.
 */
export const Radio: React.FC<RadioProps> = ({
  label,
  className = '',
  id,
  ...props
}) => {
  const radioId = id || React.useId();

  return (
    <label htmlFor={radioId} className="flex items-center gap-3 cursor-pointer group select-none">
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          id={radioId}
          className={`
            peer appearance-none w-5 h-5 bg-zinc-900 border-2 border-zinc-800 
            rounded-full transition-all cursor-pointer
            checked:border-emerald-600
            focus:ring-2 focus:ring-emerald-500/30 outline-none
            ${className}
          `}
          {...props}
        />
        <div className="absolute w-2.5 h-2.5 bg-emerald-600 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
      </div>
      {label && <span className="text-zinc-300 group-hover:text-zinc-100 transition-colors">{label}</span>}
    </label>
  );
};

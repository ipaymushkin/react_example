import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Текст рядом с чекбоксом
  label?: string;
}

/**
 * Компонент чекбокса.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className = '',
  id,
  ...props
}) => {
  const checkboxId = id || React.useId();

  return (
    <label htmlFor={checkboxId} className="flex items-center gap-3 cursor-pointer group select-none">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          id={checkboxId}
          className={`
            peer appearance-none w-5 h-5 bg-zinc-900 border-2 border-zinc-800 
            rounded-md transition-all cursor-pointer
            checked:bg-emerald-600 checked:border-emerald-600
            focus:ring-2 focus:ring-emerald-500/30 outline-none
            ${className}
          `}
          {...props}
        />
        <svg 
          className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      {label && <span className="text-zinc-300 group-hover:text-zinc-100 transition-colors">{label}</span>}
    </label>
  );
};

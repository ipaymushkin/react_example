import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Заголовок поля
  label?: string;
  // Текст ошибки
  error?: string;
}

/**
 * Компонент текстового поля ввода.
 * Включает поддержку лейбла и отображение ошибок.
 */
export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || React.useId();

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-zinc-400">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          w-full bg-zinc-900 border-2 rounded-lg px-4 py-2.5 text-zinc-100 
          placeholder:text-zinc-600 transition-all outline-none
          ${error ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-emerald-500/50'}
          ${className}
        `}
        {...props}
      />
      {error && <span className="text-xs text-red-400 mt-0.5">{error}</span>}
    </div>
  );
};

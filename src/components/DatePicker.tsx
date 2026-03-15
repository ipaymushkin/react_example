import React from 'react';

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Заголовок поля
  label?: string;
  // Текст ошибки
  error?: string;
}

/**
 * Компонент выбора даты (нативный инпут со стилизацией).
 */
export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  const dateId = id || React.useId();

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={dateId} className="text-sm font-medium text-zinc-400">
          {label}
        </label>
      )}
      <input
        type="date"
        id={dateId}
        className={`
          w-full bg-zinc-900 border-2 border-zinc-800 rounded-lg px-4 py-2.5 
          text-zinc-100 outline-none transition-all focus:border-emerald-500/50
          [color-scheme:dark] cursor-pointer
          ${error ? 'border-red-500/50' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <span className="text-xs text-red-400 mt-0.5">{error}</span>}
    </div>
  );
};

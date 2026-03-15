import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // Заголовок поля
  label?: string;
  // Текст ошибки
  error?: string;
}

/**
 * Компонент многострочного текстового поля.
 */
export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || React.useId();

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-zinc-400">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`
          w-full bg-zinc-900 border-2 rounded-lg px-4 py-2.5 text-zinc-100 
          placeholder:text-zinc-600 transition-all outline-none min-h-[120px] resize-y
          ${error ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-emerald-500/50'}
          ${className}
        `}
        {...props}
      />
      {error && <span className="text-xs text-red-400 mt-0.5">{error}</span>}
    </div>
  );
};

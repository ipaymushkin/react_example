import React from 'react';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Текст рядом с переключателем
  label?: string;
}

/**
 * Компонент переключателя (Switch/Toggle).
 * Используется для включения/выключения опций.
 */
export const Switch: React.FC<SwitchProps> = ({
  label,
  className = '',
  id,
  ...props
}) => {
  const switchId = id || React.useId();

  return (
    <label htmlFor={switchId} className="flex items-center gap-3 cursor-pointer group select-none">
      <div className="relative">
        <input
          type="checkbox"
          id={switchId}
          className="peer sr-only"
          {...props}
        />
        {/* Фон переключателя */}
        <div className={`
          w-11 h-6 bg-zinc-800 rounded-full transition-colors
          peer-checked:bg-emerald-600 peer-focus:ring-2 peer-focus:ring-emerald-500/30
          group-hover:bg-zinc-700 peer-checked:group-hover:bg-emerald-500
          ${className}
        `} />
        {/* Кружок переключателя */}
        <div className="
          absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform
          peer-checked:translate-x-5
        " />
      </div>
      {label && <span className="text-zinc-300 group-hover:text-zinc-100 transition-colors">{label}</span>}
    </label>
  );
};

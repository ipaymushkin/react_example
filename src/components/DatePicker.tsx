import React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import type { DatePickerProps as AntDatePickerProps } from 'antd';
import dayjs from 'dayjs';

interface DatePickerProps extends Omit<AntDatePickerProps, 'onChange'> {
  // Заголовок поля
  label?: string;
  // Текст ошибки
  error?: string;
  // Обработчик изменения (совместимость с текущей формой)
  onChange?: (e: { target: { value: string } }) => void;
}

/**
 * Компонент выбора даты на основе Ant Design.
 * Стилизован под общую темную тему приложения.
 */
export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  error,
  className = '',
  id,
  onChange,
  value,
  ...props
}) => {
  const dateId = id || React.useId();

  // Обработка изменения для совместимости с нативным форматом (строка YYYY-MM-DD)
  const handleChange = (date: dayjs.Dayjs | null) => {
    if (onChange) {
      onChange({
        target: {
          value: date ? date.format('YYYY-MM-DD') : '',
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={dateId} className="text-sm font-medium text-zinc-400">
          {label}
        </label>
      )}
      <AntDatePicker
        id={dateId}
        className={`
          w-full !bg-zinc-900 !border-2 !rounded-lg !px-4 !py-2.5 
          !text-zinc-100 !outline-none transition-all
          ${error ? '!border-red-500/50' : '!border-zinc-800 hover:!border-emerald-500/50 focus:!border-emerald-500/50'}
          ${className}
        `}
        value={value ? dayjs(value as string) : null}
        onChange={handleChange}
        popupClassName="ant-datepicker-dark-popup"
        {...props}
      />
      {error && <span className="text-xs text-red-400 mt-0.5">{error}</span>}
    </div>
  );
};

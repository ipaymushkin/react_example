import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Вариант стиля кнопки
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  // Размер кнопки
  size?: 'sm' | 'md' | 'lg';
  // Флаг загрузки
  isLoading?: boolean;
}

/**
 * Компонент универсальной кнопки.
 * Поддерживает различные варианты оформления и состояния.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  // Базовые стили
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Стили вариантов
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800',
    secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:bg-zinc-600',
    outline: 'border-2 border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white',
    ghost: 'text-zinc-400 hover:text-white hover:bg-zinc-800/50',
  };

  // Стили размеров
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
};

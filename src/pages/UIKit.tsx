import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Checkbox } from '../components/Checkbox';
import { Radio } from '../components/Radio';
import { Textarea } from '../components/Textarea';
import { DatePicker } from '../components/DatePicker';
import { Switch } from '../components/Switch';

/**
 * Страница UI Kit для демонстрации всех разработанных компонентов.
 */
export const UIKit: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12 px-6"
    >
      <header className="mb-12 border-b border-zinc-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-2">UI Kit</h1>
        <p className="text-zinc-400">Библиотека базовых компонентов приложения</p>
      </header>

      <div className="space-y-16">
        {/* Секция переключателей */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
            Переключатели (Switches)
          </h2>
          <div className="flex flex-wrap gap-8">
            <Switch label="Уведомления" defaultChecked />
            <Switch label="Темная тема" />
            <Switch label="Заблокировано" disabled />
          </div>
        </section>

        {/* Секция кнопок */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
            Кнопки (Buttons)
          </h2>
          <div className="flex flex-wrap gap-4 items-end">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" isLoading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 items-end">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Секция полей ввода */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
            Поля ввода (Inputs)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Имя пользователя" placeholder="Введите имя..." />
            <Input label="Пароль" type="password" placeholder="••••••••" />
            <Input label="Email" error="Некорректный адрес почты" defaultValue="invalid-email" />
            <Input label="Заблокировано" disabled value="Только для чтения" />
          </div>
        </section>

        {/* Секция выпадающих списков */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
            Выпадающие списки (Selects)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select 
              label="Выберите роль" 
              options={[
                { value: 'admin', label: 'Администратор' },
                { value: 'user', label: 'Пользователь' },
                { value: 'guest', label: 'Гость' },
              ]} 
            />
            <Select 
              label="Ошибка выбора" 
              error="Обязательное поле"
              options={[{ value: '', label: 'Не выбрано' }]} 
            />
          </div>
        </section>

        {/* Секция чекбоксов и радио */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
              Чекбоксы
            </h2>
            <div className="space-y-4">
              <Checkbox label="Согласен с условиями" defaultChecked />
              <Checkbox label="Подписаться на рассылку" />
              <Checkbox label="Заблокировано" disabled />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
              Радио кнопки
            </h2>
            <div className="space-y-4">
              <Radio name="theme" label="Темная тема" defaultChecked />
              <Radio name="theme" label="Светлая тема" />
              <Radio name="theme" label="Системная" disabled />
            </div>
          </div>
        </section>

        {/* Секция текстовых областей */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
            Текстовые области (Textareas)
          </h2>
          <div className="space-y-6">
            <Textarea label="Комментарий" placeholder="Напишите что-нибудь..." />
            <Textarea label="Описание" error="Слишком короткий текст" defaultValue="Коротко" />
          </div>
        </section>

        {/* Секция выбора даты */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
            Выбор даты (DatePicker)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DatePicker label="Дата рождения" />
            <DatePicker label="Дата начала" defaultValue="2026-03-15" />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

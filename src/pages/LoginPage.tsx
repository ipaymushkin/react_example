import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Input } from '../components/Input';
import { DatePicker } from '../components/DatePicker';
import { Radio } from '../components/Radio';
import { Checkbox } from '../components/Checkbox';
import { Button } from '../components/Button';

/**
 * Интерфейс данных пользователя для формы входа.
 */
export interface UserData {
  fullName: string;
  email: string;
  birthDate: string;
  gender: 'male' | 'female' | 'other';
  consent: boolean;
}

interface LoginPageProps {
  // Функция обратного вызова при успешном входе
  onLogin: (data: UserData) => void;
}

/**
 * Страница входа с формой регистрации/авторизации.
 * Использует ранее созданные UI компоненты.
 */
export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  // Состояние формы
  const [formData, setFormData] = useState<UserData>({
    fullName: '',
    email: '',
    birthDate: '',
    gender: 'male',
    consent: false,
  });

  // Состояние ошибок валидации
  const [errors, setErrors] = useState<Partial<Record<keyof UserData, string>>>({});

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Простая валидация
    const newErrors: Partial<Record<keyof UserData, string>> = {};
    if (!formData.fullName) newErrors.fullName = 'Введите ФИО';
    if (!formData.email) newErrors.email = 'Введите Email';
    if (!formData.birthDate) newErrors.birthDate = 'Выберите дату рождения';
    if (!formData.consent) newErrors.consent = 'Необходимо согласие';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onLogin(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-zinc-950">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl backdrop-blur-xl shadow-2xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Добро пожаловать</h1>
          <p className="text-zinc-400">Пожалуйста, заполните данные для входа</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input 
            label="ФИО" 
            placeholder="Иванов Иван Иванович"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            error={errors.fullName}
          />

          <Input 
            label="Email" 
            type="email" 
            placeholder="example@mail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
          />

          <DatePicker 
            label="Дата рождения"
            value={formData.birthDate}
            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            error={errors.birthDate}
          />

          <div className="space-y-3">
            <label className="text-sm font-medium text-zinc-400">Пол</label>
            <div className="flex gap-6">
              <Radio 
                name="gender" 
                label="Мужской" 
                checked={formData.gender === 'male'} 
                onChange={() => setFormData({ ...formData, gender: 'male' })}
              />
              <Radio 
                name="gender" 
                label="Женский" 
                checked={formData.gender === 'female'} 
                onChange={() => setFormData({ ...formData, gender: 'female' })}
              />
            </div>
          </div>

          <Checkbox 
            label="Согласие на обработку персональных данных" 
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className={errors.consent ? 'border-red-500/50' : ''}
          />
          {errors.consent && <p className="text-xs text-red-400 -mt-4">{errors.consent}</p>}

          <Button type="submit" className="w-full py-4 text-lg" variant="primary">
            Войти
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

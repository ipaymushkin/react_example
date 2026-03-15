/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UIKit } from "./pages/UIKit";
import { Button } from "./components/Button";
import { LoginPage, UserData } from "./pages/LoginPage";

/**
 * Главный компонент приложения.
 * Управляет авторизацией и навигацией.
 */
export default function App() {
  // Состояние авторизации
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Данные пользователя
  const [userData, setUserData] = useState<UserData | null>(null);
  // Состояние для переключения между главной страницей и UI Kit
  const [showUIKit, setShowUIKit] = useState(false);

  // Обработчик входа
  const handleLogin = (data: UserData) => {
    setUserData(data);
    setIsLoggedIn(true);
  };

  // Обработчик выхода
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setShowUIKit(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          /* Страница входа */
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoginPage onLogin={handleLogin} />
          </motion.div>
        ) : (
          /* Основной контент приложения после входа */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Кнопки управления в углу экрана */}
            <div className="fixed top-6 right-6 z-50 flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setShowUIKit(!showUIKit)}
                className="shadow-lg backdrop-blur-sm bg-zinc-900/50"
              >
                {showUIKit ? "Назад к профилю" : "Открыть UI Kit"}
              </Button>
              <Button 
                variant="secondary" 
                onClick={handleLogout}
                className="shadow-lg"
              >
                Выйти
              </Button>
            </div>

            <main>
              <AnimatePresence mode="wait">
                {!showUIKit ? (
                  /* Главная страница с данными пользователя */
                  <motion.div 
                    key="hero"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="min-h-screen flex items-center justify-center p-4"
                  >
                    <div className="text-center max-w-2xl">
                      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                        Привет, <span className="text-emerald-500">{userData?.fullName.split(' ')[0]}</span>!
                      </h1>
                      
                      {/* Карточка с данными пользователя */}
                      <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl text-left mb-8 backdrop-blur-sm">
                        <h2 className="text-zinc-400 text-sm uppercase tracking-widest font-bold mb-4">Ваши данные</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-zinc-500 text-xs mb-1">ФИО</p>
                            <p className="text-zinc-100 font-medium">{userData?.fullName}</p>
                          </div>
                          <div>
                            <p className="text-zinc-500 text-xs mb-1">Email</p>
                            <p className="text-zinc-100 font-medium">{userData?.email}</p>
                          </div>
                          <div>
                            <p className="text-zinc-500 text-xs mb-1">Дата рождения</p>
                            <p className="text-zinc-100 font-medium">{userData?.birthDate}</p>
                          </div>
                          <div>
                            <p className="text-zinc-500 text-xs mb-1">Пол</p>
                            <p className="text-zinc-100 font-medium">
                              {userData?.gender === 'male' ? 'Мужской' : 'Женский'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-lg font-medium mb-8">
                        Вы успешно авторизовались. Теперь вы можете исследовать библиотеку компонентов или продолжить работу.
                      </p>

                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex justify-center gap-4"
                      >
                        <div className="h-1 w-12 bg-emerald-500 rounded-full" />
                        <div className="h-1 w-1 bg-zinc-800 rounded-full" />
                        <div className="h-1 w-1 bg-zinc-800 rounded-full" />
                      </motion.div>
                    </div>
                  </motion.div>
                ) : (
                  /* Страница UI Kit */
                  <motion.div
                    key="uikit"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <UIKit />
                  </motion.div>
                )}
              </AnimatePresence>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



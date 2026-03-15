/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UIKit } from "./pages/UIKit";
import { Button } from "./components/Button";

/**
 * Главный компонент приложения.
 * Управляет навигацией между приветственным экраном и UI Kit.
 */
export default function App() {
  // Состояние для переключения между главной страницей и UI Kit
  const [showUIKit, setShowUIKit] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
      {/* Кнопка переключения в углу экрана */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          variant="outline" 
          onClick={() => setShowUIKit(!showUIKit)}
          className="shadow-lg backdrop-blur-sm bg-zinc-900/50"
        >
          {showUIKit ? "Вернуться назад" : "Открыть UI Kit"}
        </Button>
      </div>

      <main>
        <AnimatePresence mode="wait">
          {!showUIKit ? (
            <motion.div 
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex items-center justify-center p-4"
            >
              <div className="text-center">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                  Hello <span className="text-emerald-500 italic">World</span>
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-md mx-auto mb-8">
                  Добро пожаловать в ваше новое приложение на React + TypeScript. 
                  Нажмите кнопку в углу, чтобы посмотреть библиотеку компонентов.
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
    </div>
  );
}


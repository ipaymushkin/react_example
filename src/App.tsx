/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 selection:bg-emerald-500/30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
          Hello <span className="text-emerald-500 italic">World</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-md mx-auto">
          Welcome to your new React + TypeScript application. 
          Built with speed and style in mind.
        </p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 flex justify-center gap-4"
        >
          <div className="h-1 w-12 bg-emerald-500 rounded-full" />
          <div className="h-1 w-1 bg-zinc-800 rounded-full" />
          <div className="h-1 w-1 bg-zinc-800 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}

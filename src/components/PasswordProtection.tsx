import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Loader2 } from 'lucide-react';

// Пароль для доступа к сайту - можно легко изменить здесь
const SITE_PASSWORD = 'blur2025';

interface PasswordProtectionProps {
  onAuthenticated: () => void;
}

export default function PasswordProtection({ onAuthenticated }: PasswordProtectionProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Имитация проверки пароля
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password === SITE_PASSWORD) {
      localStorage.setItem('blur_authenticated', 'true');
      onAuthenticated();
    } else {
      setError('Неверный пароль');
      setPassword('');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
      {/* Animated background gradient */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/10"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-blue-600/20 border-2 border-blue-400/50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/30">
            <Lock className="w-10 h-10 text-blue-400" />
          </div>
          
          <h1 className="text-3xl font-light tracking-tight mb-2">
            Доступ к <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Blur</span>
          </h1>
          <p className="text-neutral-400 text-sm">
            Введите пароль для продолжения
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              className="w-full bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 focus:border-blue-500/50 rounded-lg px-4 py-3 pr-12 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              disabled={isLoading}
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-300 transition-colors duration-200"
              disabled={isLoading}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg py-2 px-4">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={!password || isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-neutral-700 disabled:to-neutral-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Проверка...</span>
              </>
            ) : (
              <span>Войти</span>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500">
            Защищенный доступ к AI-сканеру мемкоинов
          </p>
        </div>
      </div>
    </div>
  );
}
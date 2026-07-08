import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MaterialIcon } from '../MaterialIcon';

export const AuthModal = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('user@xiaomi.com');
  const [password, setPassword] = useState('••••••••');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onLoginSuccess({
        name: email.split('@')[0] || 'Xiaomi Fan',
        email: email,
      });
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-[#FF6900] hover:text-white text-gray-600 transition-colors cursor-pointer flex items-center justify-center"
          >
            <MaterialIcon name="close" size={20} />
          </button>

          {isSuccess ? (
            <div className="py-12 text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto"
              >
                <MaterialIcon name="check_circle" size={36} fill={true} />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900">Welcome to Xiaomi!</h3>
              <p className="text-sm text-gray-500">Signing you in securely via Xiaomi Cloud...</p>
            </div>
          ) : (
            <div>
              {/* Xiaomi Header Brand */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-[44px] h-[44px] bg-[#FF6900] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md mb-3">
                  mi
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {isLogin ? 'Sign in to Xiaomi Account' : 'Create Xiaomi Account'}
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Access your orders, Mi Cloud, devices, and exclusive perks
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Email or Mi ID
                  </label>
                  <div className="relative">
                    <MaterialIcon name="mail" size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email or mobile number"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#FF6900] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Password
                    </label>
                    {isLogin && (
                      <a href="#forgot" className="text-xs text-[#FF6900] hover:underline">
                        Forgot password?
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <MaterialIcon name="lock" size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#FF6900] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 bg-[#FF6900] hover:bg-[#e05d00] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>{isLogin ? 'Sign In' : 'Agree & Continue'}</span>
                  <MaterialIcon name="arrow_forward" size={18} />
                </motion.button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500">
                  {isLogin ? "Don't have a Xiaomi account?" : 'Already registered?'}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-1 text-[#FF6900] font-bold hover:underline cursor-pointer"
                  >
                    {isLogin ? 'Create one now' : 'Sign in here'}
                  </button>
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default AuthModal;

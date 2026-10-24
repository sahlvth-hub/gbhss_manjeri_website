import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'navbar' | 'compact' | 'footer';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'navbar',
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80 ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
            language === 'en'
              ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage('ml')}
          className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all font-sans ${
            language === 'ml'
              ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-label="മലയാളത്തിലേക്ക് മാറ്റുക"
        >
          മലയാളം
        </button>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Select language"
      className={`relative inline-flex items-center bg-slate-900/5 hover:bg-slate-900/10 backdrop-blur-md p-1 rounded-2xl border border-slate-200/80 transition-all ${className}`}
    >
      <div className="flex items-center gap-1 pl-2 pr-1 text-slate-600">
        <Languages className="w-3.5 h-3.5 text-amber-600" />
      </div>

      <div className="relative flex items-center">
        {/* English Button */}
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`relative z-10 px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 flex items-center gap-1 cursor-pointer ${
            language === 'en'
              ? 'text-slate-900 font-extrabold shadow-sm bg-white border border-slate-200/80 ring-1 ring-amber-400/20'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-pressed={language === 'en'}
          title="English (Primary)"
        >
          <span>EN</span>
        </button>

        {/* Malayalam Button */}
        <button
          type="button"
          onClick={() => setLanguage('ml')}
          className={`relative z-10 px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 flex items-center gap-1 cursor-pointer ${
            language === 'ml'
              ? 'text-slate-900 font-extrabold shadow-sm bg-white border border-slate-200/80 ring-1 ring-amber-400/20'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-pressed={language === 'ml'}
          title="മലയാളം (ദ്വിതീയം)"
        >
          <span className="tracking-wide">മലയാളം</span>
        </button>
      </div>
    </div>
  );
};

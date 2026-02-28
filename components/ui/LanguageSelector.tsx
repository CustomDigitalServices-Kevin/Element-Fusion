'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage, LOCALES, LOCALE_LABELS, LOCALE_FLAGS } from '@/lib/i18n'
import { clsx } from 'clsx'

export function LanguageSelector() {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium',
          'border border-glass-border bg-glass-bg/30 hover:bg-glass-bg/50',
          'text-text-secondary hover:text-text-primary transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
        )}
        aria-label="Language"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{LOCALE_FLAGS[locale]}</span>
        <span className="uppercase text-[11px] tracking-wide">{locale}</span>
      </button>

      {open && (
        <div
          className={clsx(
            'absolute right-0 top-full mt-1.5 z-50 min-w-[160px]',
            'rounded-xl border border-glass-border bg-bg-secondary/95',
            'shadow-lg shadow-black/30 overflow-hidden'
          )}
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          {LOCALES.map(loc => (
            <button
              key={loc}
              onClick={() => { setLocale(loc); setOpen(false) }}
              className={clsx(
                'flex items-center gap-2.5 w-full px-3.5 py-2.5 text-sm transition-colors',
                loc === locale
                  ? 'text-accent-primary bg-accent-primary/10 font-medium'
                  : 'text-text-secondary hover:text-text-primary hover:bg-glass-bg/40'
              )}
            >
              <span className="text-base leading-none">{LOCALE_FLAGS[loc]}</span>
              <span>{LOCALE_LABELS[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

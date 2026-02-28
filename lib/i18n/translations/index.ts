import type { Locale } from '../types'
import type { TranslationDict } from '../types'
import { fr } from './fr'
import { en } from './en'
import { es } from './es'
import { it } from './it'
import { pt } from './pt'
import { de } from './de'

export const translations: Record<Locale, TranslationDict> = { fr, en, es, it, pt, de }

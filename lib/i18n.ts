export type Dictionary = {
  common: {
    signIn: string
    signOut: string
    register: string
    dashboard: string
  }
}

export const en: Dictionary = {
  common: {
    signIn: 'Sign in',
    signOut: 'Sign out',
    register: 'Register',
    dashboard: 'Dashboard'
  }
}

export function getDictionary(locale: string = 'en'): Dictionary {
  return en
}


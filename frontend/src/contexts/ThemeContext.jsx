import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// WWE Superstar Themes Configuration
export const WWE_THEMES = {
  undertaker: {
    name: 'The Undertaker',
    audio: '/audio/undertakers.mp3',
    colors: {
      primary: '#8B00FF',
      secondary: '#4B0082',
      accent: '#9370DB',
      background: '#0a0a0a',
      surface: '#1a1a2e',
      text: '#e0e0e0',
      textSecondary: '#b0b0b0',
    }
  },
  johncena: {
    name: 'John Cena',
    audio: '/audio/johncena.mp3',
    colors: {
      primary: '#003087',
      secondary: '#00A8E8',
      accent: '#FFA500',
      background: '#ffffff',
      surface: '#f5f5f5',
      text: '#1a1a1a',
      textSecondary: '#4a4a4a',
    }
  },
  tripleh: {
    name: 'Triple H',
    audio: '/audio/tripleh.mp3',
    colors: {
      primary: '#00a650',
      secondary: '#008940',
      accent: '#90ee90',
      background: '#0d1b0d',
      surface: '#1a2e1a',
      text: '#e0ffe0',
      textSecondary: '#a0d0a0',
    }
  },
  kane: {
    name: 'Kane',
    audio: '/audio/kane.mp3',
    colors: {
      primary: '#8b0000',
      secondary: '#ff0000',
      accent: '#ff4444',
      background: '#1a0000',
      surface: '#2d0a0a',
      text: '#ffcccc',
      textSecondary: '#cc8888',
    }
  },
  randyorton: {
    name: 'Randy Orton',
    audio: '/audio/randyorton.mp3',
    colors: {
      primary: '#d4a574',
      secondary: '#8b7355',
      accent: '#f4e4c1',
      background: '#1a1510',
      surface: '#2d2520',
      text: '#f5e6d3',
      textSecondary: '#c4a484',
    }
  },
  markhenry: {
    name: 'Mark Henry',
    audio: '/audio/markhenry.mp3',
    colors: {
      primary: '#654321',
      secondary: '#8b4513',
      accent: '#cd853f',
      background: '#0f0a05',
      surface: '#1f1510',
      text: '#f0e6d2',
      textSecondary: '#c4b5a0',
    }
  },
  reymysterio: {
    name: 'Rey Mysterio',
    audio: '/audio/reymesterio.mp3',
    colors: {
      primary: '#00a86b',
      secondary: '#ff0000',
      accent: '#ffd700',
      background: '#0a0a0a',
      surface: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#cccccc',
    }
  },
  shinsuke: {
    name: 'Shinsuke Nakamura',
    audio: '/audio/shinsuke.mp3',
    colors: {
      primary: '#dc143c',
      secondary: '#1a1a1a',
      accent: '#ffffff',
      background: '#0d0d0d',
      surface: '#1f1f1f',
      text: '#ffffff',
      textSecondary: '#cccccc',
    }
  },
  therock: {
    name: 'The Rock',
    audio: '/audio/therock.mp3',
    colors: {
      primary: '#ffd700',
      secondary: '#b8860b',
      accent: '#ffec8b',
      background: '#0a0a0a',
      surface: '#1a1510',
      text: '#fff8dc',
      textSecondary: '#daa520',
    }
  }
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('undertaker')
  const [previousTheme, setPreviousTheme] = useState(null)

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('wweTheme')
    if (savedTheme && WWE_THEMES[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Apply theme colors to CSS variables
    const theme = WWE_THEMES[currentTheme]
    const root = document.documentElement
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })
    
    localStorage.setItem('wweTheme', currentTheme)
  }, [currentTheme])

  const changeTheme = (themeName) => {
    if (WWE_THEMES[themeName]) {
      setPreviousTheme(currentTheme)
      setCurrentTheme(themeName)
    }
  }

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      changeTheme, 
      previousTheme,
      themeData: WWE_THEMES[currentTheme],
      allThemes: WWE_THEMES
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

import { useTheme } from '../../contexts/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        // Sun icon for light mode
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.5C14.76 17.5 17 15.26 17 12.5C17 9.74 14.76 7.5 12 7.5C9.24 7.5 7 9.74 7 12.5C7 15.26 9.24 17.5 12 17.5ZM12 6L14.39 3.61L16.97 6.19L14.39 8.77L12 6ZM3.61 9.61L6.19 7.03L8.77 9.61L6.19 12.19L3.61 9.61ZM20.39 14.39L17.81 16.97L15.23 14.39L17.81 11.81L20.39 14.39ZM15.23 20.39L12.65 17.81L15.23 15.23L17.81 17.81L15.23 20.39Z"/>
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.08 20.9 10.64C19.92 12.01 18.32 12.9 16.5 12.9C13.52 12.9 11.1 10.48 11.1 7.5C11.1 5.68 11.99 4.08 13.36 3.1C12.92 3.04 12.46 3 12 3Z"/>
        </svg>
      )}
      <span className="theme-label">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  )
}

export default ThemeToggle

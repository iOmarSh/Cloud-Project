import { useState, useRef, useEffect } from 'react'
import { useTheme, WWE_THEMES } from '../../contexts/ThemeContext'
import './WWEThemeSelector.css'

const WWEThemeSelector = () => {
  const { currentTheme, changeTheme, previousTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)
  const selectorRef = useRef(null)
  const isFirstRender = useRef(true)

  // Play theme music when theme changes (except on first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (audioRef.current && previousTheme !== null) {
      if (!isMuted) {
        const themeAudio = WWE_THEMES[currentTheme].audio
        audioRef.current.src = themeAudio
        audioRef.current.volume = 0.5
        audioRef.current.play().catch(err => {
          console.log('Audio play failed:', err)
        })
      } else {
        // Stop audio if muted
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [currentTheme, isMuted, previousTheme])

  // Stop audio when mute button is clicked
  useEffect(() => {
    if (isMuted && audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [isMuted])

  // Close selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleThemeSelect = (themeName) => {
    changeTheme(themeName)
    setIsOpen(false)
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  return (
    <div className="wwe-theme-selector" ref={selectorRef}>
      <audio ref={audioRef} />
      
      <button 
        className="theme-selector-trigger"
        onClick={() => setIsOpen(!isOpen)}
        title="Choose your WWE Superstar Theme"
      >
        <span className="theme-icon">🎭</span>
        <span className="theme-name">{WWE_THEMES[currentTheme].name}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      <button 
        className={`mute-toggle ${isMuted ? 'muted' : ''}`}
        onClick={toggleMute}
        title={isMuted ? 'Unmute Theme Music' : 'Mute Theme Music'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          <div className="theme-dropdown-header">
            <h3>Choose Your Champion</h3>
            <p>Pick a WWE Superstar theme</p>
          </div>
          
          <div className="theme-options">
            {Object.entries(WWE_THEMES).map(([key, theme]) => (
              <button
                key={key}
                className={`theme-option ${currentTheme === key ? 'active' : ''}`}
                onClick={() => handleThemeSelect(key)}
                style={{
                  '--theme-primary': theme.colors.primary,
                  '--theme-secondary': theme.colors.secondary,
                  '--theme-accent': theme.colors.accent,
                }}
              >
                <div className="theme-color-preview">
                  <span style={{ background: theme.colors.primary }}></span>
                  <span style={{ background: theme.colors.secondary }}></span>
                  <span style={{ background: theme.colors.accent }}></span>
                </div>
                <span className="theme-option-name">{theme.name}</span>
                {currentTheme === key && <span className="active-indicator">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default WWEThemeSelector

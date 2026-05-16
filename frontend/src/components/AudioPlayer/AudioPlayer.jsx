import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import './AudioPlayer.css'

const AudioPlayer = () => {
  const { isDark } = useTheme()
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)
  const hasLoadedRef = useRef(false)

  useEffect(() => {
    console.log('Theme changed! isDark:', isDark, 'hasLoadedRef:', hasLoadedRef.current)
    
    // Skip the very first render (page load)
    if (!hasLoadedRef.current) {
      hasLoadedRef.current = true
      console.log('First load - skipping audio')
      return
    }

    // This runs ONLY when theme changes after the first load (i.e., when user clicks toggle)
    if (audioRef.current) {
      const audioSource = isDark 
        ? `${import.meta.env.BASE_URL}audio/undertakers.mp3`  // User clicked to dark theme
        : `${import.meta.env.BASE_URL}audio/johncena.mp3`     // User clicked to light theme
      
      console.log('Playing audio:', audioSource)
      
      // Stop current audio if playing
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      
      // Set new source and play
      audioRef.current.src = audioSource
      audioRef.current.load()
      
      // Play the audio
      audioRef.current.play()
        .then(() => console.log('Audio playing successfully'))
        .catch(error => {
          console.log('Audio play failed:', error)
        })
    }
  }, [isDark])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="audio-player">
      <audio 
        ref={audioRef}
        preload="auto"
      />
      
      <button 
        className={`mute-btn ${isMuted ? 'muted' : ''}`} 
        onClick={toggleMute}
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </button>
    </div>
  )
}

export default AudioPlayer

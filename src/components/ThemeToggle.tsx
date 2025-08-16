import { IconButton, Tooltip } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useTheme } from '@mui/material/styles'

// A tiny helper that expects theme to change via document event.
// We'll emit an event from Layout to flip palette mode stored there.
export default function ThemeToggle() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const toggle = () => {
    window.dispatchEvent(new CustomEvent('toggle-theme'))
  }

  return (
    <Tooltip title={isDark ? 'Switch to light' : 'Switch to dark'}>
      <IconButton color="inherit" onClick={toggle} aria-label="toggle theme">
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  )
}

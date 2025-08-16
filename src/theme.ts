import { createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useMemo, useState } from 'react'

export function useAppTheme() {
  // Respect system preference on first load
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDark ? 'dark' : 'light')

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: '#0f766e' }, // teal
      secondary: { main: '#7c3aed' }, // purple
    },
    typography: {
      fontFamily: ['Inter', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'].join(','),
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: { styleOverrides: { root: { textTransform: 'none', borderRadius: 10 } } },
      MuiContainer: { defaultProps: { maxWidth: 'md' } },
    },
  }), [mode])

  return { theme, mode, setMode }
}

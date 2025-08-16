import * as React from 'react'
import { AppBar, Box, Container, IconButton, Link as MLink, Toolbar, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useAppTheme } from '../theme'
import { ThemeProvider, CssBaseline } from '@mui/material'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  // Keep theme state here so ThemeToggle can flip it by event
  const { theme, setMode } = useAppTheme()

  React.useEffect(() => {
    const handler = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))
    window.addEventListener('toggle-theme', handler)
    return () => window.removeEventListener('toggle-theme', handler)
  }, [setMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Sergio Martinez
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box component="nav" sx={{ display: 'flex', gap: 2 }}>
            {nav.map(n => (
              <MLink
                key={n.to}
                component={NavLink}
                to={n.to}
                underline="none"
                color="inherit"
                sx={{
                  fontWeight: 500,
                  '&[aria-current="page"]': { fontWeight: 700 },
                }}
              >
                {n.label}
              </MLink>
            ))}
          </Box>
          <ThemeToggle />
          <IconButton
            component="a"
            href="https://github.com/yourname/yourrepo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 6 }}>{children}</Container>

      <Box component="footer" sx={{ py: 6, textAlign: 'center', opacity: 0.7 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Sergio Martinez • Built with React + MUI •{' '}
          <MLink href="https://github.com/yourname/yourrepo" target="_blank" rel="noreferrer">Source</MLink>
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

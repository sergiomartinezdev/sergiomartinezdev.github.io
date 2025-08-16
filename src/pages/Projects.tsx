import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material'

type Project = {
  title: string
  desc: string
  href?: string
}

const PROJECTS: Project[] = [
  { title: 'NFS Toolkit', desc: 'RHEL utilities and docs for NFS setups', href: '#' },
  { title: 'Tenant Landlord Helper', desc: 'Small app to estimate cleaning deductions (TX)', href: '#' },
  { title: 'RHCSA Notes', desc: 'LVM, systemd, rpm, and more—condensed', href: '#' },
]

export default function Projects({ projects = PROJECTS }: { projects?: Project[] }) {
  return (
    <>
      <Typography variant="h4" fontWeight={800} gutterBottom>
        Projects
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        }}
      >
        {projects.map((p) => (
          <Card
            key={p.title}
            variant="outlined"
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 120ms ease, box-shadow 120ms ease',
              '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                {p.title}
              </Typography>
              <Typography color="text.secondary">{p.desc}</Typography>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                size="small"
                component="a"
                href={p.href || '#'}
                target={p.href ? '_blank' : undefined}
                rel={p.href ? 'noreferrer' : undefined}
              >
                {p.href ? 'Open' : 'Coming soon'}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  )
}

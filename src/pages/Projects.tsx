import { Card, CardContent, CardActions, Button, Grid, Typography } from '@mui/material'

const projects = [
  { title: 'NFS Toolkit', desc: 'RHEL utilities and docs for NFS setups', href: '#' },
  { title: 'Tenant Landlord Helper', desc: 'Small app to estimate cleaning deductions (TX)', href: '#' },
  { title: 'RHCSA Notes', desc: 'LVM, systemd, rpm, and more—condensed', href: '#' },
]

export default function Projects() {
  return (
    <>
      <Typography variant="h4" fontWeight={800} gutterBottom>Projects</Typography>
      <Grid container spacing={2}>
        {projects.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.title}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.title}</Typography>
                <Typography color="text.secondary">{p.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button href={p.href} target="_blank" rel="noreferrer">Open</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

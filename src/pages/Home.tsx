import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Stack spacing={3} alignItems="center" textAlign="center">
      <Typography variant="h3" fontWeight={800}>Hi, I’m Sergio</Typography>
      <Typography color="text.secondary" maxWidth={640}>
        Engineer • Veteran • Builder. I enjoy infrastructure, Linux, and shipping polished web UIs.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" component={Link} to="/projects">View Projects</Button>
        <Button variant="outlined" component={Link} to="/contact">Contact</Button>
      </Stack>
      <Card sx={{ mt: 2, maxWidth: 720 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Featured Project</Typography>
          <Typography color="text.secondary">Quick blurb about a recent project you’re proud of.</Typography>
        </CardContent>
      </Card>
    </Stack>
  )
}

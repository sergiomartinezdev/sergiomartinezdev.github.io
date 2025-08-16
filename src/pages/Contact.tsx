import { Alert, Button, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // For a no-backend weekend: wire this to Formspree, Basin, or Netlify Forms.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Stack spacing={2} component="form" onSubmit={onSubmit}>
      <Typography variant="h4" fontWeight={800}>Contact</Typography>
      {sent && <Alert severity="success">Thanks! I’ll reply soon.</Alert>}
      <TextField label="Your email" type="email" required />
      <TextField label="Message" multiline minRows={4} required />
      <Button type="submit" variant="contained">Send</Button>
      <Typography variant="body2" color="text.secondary">
        Tip: use Formspree or Netlify Forms to receive submissions without a server.
      </Typography>
    </Stack>
  )
}

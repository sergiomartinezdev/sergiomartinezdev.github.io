import { Stack, Typography } from '@mui/material'

export default function About() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" fontWeight={800}>About</Typography>
      <Typography>
        Short bio. Your interests, tech stack (TypeScript, React, Linux), and what you’re seeking.
      </Typography>
    </Stack>
  )
}

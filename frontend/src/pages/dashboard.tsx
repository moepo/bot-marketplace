import { Container, Typography, Box } from '@mui/material';

export default function DeveloperDashboardPage() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Developer Dashboard
        </Typography>
        <Typography variant="body1">
          Manage your bots, track earnings, and monitor performance.
        </Typography>
      </Box>
    </Container>
  );
}

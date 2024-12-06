import { Container, Typography, Box } from '@mui/material';

export default function APIIntegrationPage() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          API Integration
        </Typography>
        <Typography variant="body1">
          Connect AI bots to your existing workflows and applications.
        </Typography>
      </Box>
    </Container>
  );
}

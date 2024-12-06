import { Container, Typography, Box } from '@mui/material';

export default function CommunityHubPage() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Community Hub
        </Typography>
        <Typography variant="body1">
          Collaborate, share, and discover AI bot solutions with our global community.
        </Typography>
      </Box>
    </Container>
  );
}

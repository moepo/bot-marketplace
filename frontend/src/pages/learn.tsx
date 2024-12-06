import { Container, Typography, Box } from '@mui/material';

export default function LearningCenterPage() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Learning Center
        </Typography>
        <Typography variant="body1">
          Access tutorials, resources, and guides for AI bot development.
        </Typography>
      </Box>
    </Container>
  );
}

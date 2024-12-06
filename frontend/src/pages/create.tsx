import { Container, Typography, Box } from '@mui/material';

export default function BotCreationStudioPage() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Bot Creation Studio
        </Typography>
        <Typography variant="body1">
          Build and customize your own AI bots with our intuitive development tools.
        </Typography>
      </Box>
    </Container>
  );
}

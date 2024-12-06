import { Container, Typography, Box } from '@mui/material';

export default function MarketplacePage() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          AI Bot Marketplace
        </Typography>
        <Typography variant="body1">
          Browse and deploy intelligent AI solutions from our curated collection.
        </Typography>
      </Box>
    </Container>
  );
}

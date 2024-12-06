import { Box, Container, Grid, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Debot Marketplace
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The premier platform for bot development and deployment
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/docs" color="text.secondary">Documentation</Link>
              <Link href="/api" color="text.secondary">API</Link>
              <Link href="/support" color="text.secondary">Support</Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/privacy" color="text.secondary">Privacy Policy</Link>
              <Link href="/terms" color="text.secondary">Terms of Service</Link>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Debot Marketplace. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

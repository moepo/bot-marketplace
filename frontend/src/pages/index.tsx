import { Box, Container, Typography, Grid, Card, CardContent, Button, Paper, Stack, useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { AutoAwesome, Code, ShoppingCart, Security, Analytics, Star } from '@mui/icons-material';

const features = [
  {
    icon: <Code />,
    title: 'Bot Development',
    description: 'Create and publish your custom bots with our powerful development tools',
    link: '/develop'
  },
  {
    icon: <ShoppingCart />,
    title: 'Marketplace',
    description: 'Browse and purchase verified bots from our curated marketplace',
    link: '/marketplace'
  },
  {
    icon: <Security />,
    title: 'Secure Platform',
    description: 'Enterprise-grade security with automated validation and testing',
    link: '/security'
  },
  {
    icon: <Analytics />,
    title: 'Analytics',
    description: 'Track performance and usage with detailed analytics',
    link: '/analytics'
  }
];

const steps = [
  {
    title: 'Create',
    description: 'Develop your bot using our comprehensive tools and templates',
    link: '/develop'
  },
  {
    title: 'Validate',
    description: 'Submit your bot for automated testing and validation',
    link: '/validate'
  },
  {
    title: 'Publish',
    description: 'List your bot on the marketplace with custom pricing',
    link: '/publish'
  },
  {
    title: 'Earn',
    description: 'Generate revenue as customers use your bot solutions',
    link: '/earnings'
  }
];

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Hero Section */}
      <Paper 
        sx={{ 
          position: 'relative',
          backgroundColor: 'primary.main',
          color: 'white',
          mb: 4,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                variant={isMobile ? 'h3' : 'h2'}
                color="inherit"
                gutterBottom
              >
                The Ultimate Bot Marketplace
              </Typography>
              <Typography
                variant="h5"
                color="inherit"
                paragraph
                sx={{ opacity: 0.9 }}
              >
                Discover, buy, and sell powerful bot solutions. Join the future of automation.
              </Typography>
              <Stack direction="row" spacing={2} mt={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<AutoAwesome />}
                  href="/marketplace"
                >
                  Start Building
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  href="/develop"
                >
                  Explore Bots
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Platform Features
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" paragraph>
          Everything you need to succeed in the bot ecosystem
        </Typography>
        <Grid container spacing={4} mt={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Link href={feature.link} passHref style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    textAlign: 'center',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: theme.shadows[4]
                    }
                  }}
                  elevation={2}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box 
                      sx={{ 
                        color: 'primary.main', 
                        mb: 2, 
                        display: 'flex', 
                        justifyContent: 'center' 
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How it Works Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" paragraph>
            Your journey from development to deployment
          </Typography>
          <Grid container spacing={4} mt={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={step.title}>
                <Link href={step.link} passHref style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  <Paper
                    sx={{ 
                      p: 3, 
                      textAlign: 'center',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: theme.shadows[4]
                      }
                    }}
                    elevation={2}
                  >
                    <Typography 
                      variant="h1"
                      sx={{
                        color: 'primary.main',
                        opacity: 0.2,
                        fontWeight: 'bold',
                        mb: 2
                      }}
                    >
                      {index + 1}
                    </Typography>
                    <Typography variant="h6" component="h3" textAlign="center" gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                      {step.description}
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ my: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Join our growing community of bot developers and users
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          mt={4}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<Code />}
            href="/develop"
          >
            Start Building
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ShoppingCart />}
            href="/marketplace"
          >
            Browse Marketplace
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

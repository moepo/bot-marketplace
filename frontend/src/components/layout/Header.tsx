import { AppBar, Toolbar, Button, Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box 
              sx={{ 
                width: 40, 
                height: 40, 
                backgroundColor: 'primary.main', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              D
            </Box>
            <Typography variant="h6">
              Debot.link
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/marketplace" passHref style={{ textDecoration: 'none' }}>
              <Button color="inherit">Marketplace</Button>
            </Link>
            <Link href="/dashboard" passHref style={{ textDecoration: 'none' }}>
              <Button color="inherit">Dashboard</Button>
            </Link>
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

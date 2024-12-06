import React, { useState, useRef, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Container, 
  Typography, 
  Popper, 
  Grow, 
  Paper, 
  ClickAwayListener, 
  MenuList, 
  MenuItem,
  Divider,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ProjectFeatures } from '../../config/features';

// Styled components for enhanced menu styling
const FeatureMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(0.5),
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
}));

const LogoLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
}));

interface HeaderProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Header({ mode, toggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        anchorRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <LogoLink href="/">
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box 
                sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0d47a1 0%, #2196f3 100%)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 4px 8px rgba(13, 71, 161, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                    zIndex: 1,
                  }
                }}
              >
                <Typography 
                  sx={{ 
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    zIndex: 2,
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  D
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    fontSize: '1.25rem',
                  }}
                >
                  Debot
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: '0.75rem',
                    opacity: 0.7,
                    letterSpacing: '0.02em',
                    lineHeight: 1,
                    mt: '-2px'
                  }}
                >
                  .link
                </Typography>
              </Box>
            </Box>
          </LogoLink>
          
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button 
              ref={anchorRef}
              aria-controls={open ? 'features-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="menu"
              color="inherit" 
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleToggle}
            >
              Features
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role="menu"
              placement="bottom-start"
              transition
              disablePortal
              style={{ zIndex: 1300 }}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper 
                    elevation={8} 
                    sx={{ 
                      minWidth: 300, 
                      maxWidth: 350, 
                      borderRadius: 2 
                    }}
                  >
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="features-menu"
                        aria-labelledby="features-button"
                      >
                        {ProjectFeatures.map((feature, index) => (
                          <React.Fragment key={feature.name}>
                            <Link 
                              href={feature.href} 
                              passHref 
                              style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                              <FeatureMenuItem 
                                onClick={handleClose}
                                role="menuitem"
                              >
                                <FeatureTitle variant="subtitle2">
                                  {feature.name}
                                </FeatureTitle>
                                <FeatureDescription>
                                  {feature.description}
                                </FeatureDescription>
                              </FeatureMenuItem>
                            </Link>
                            {index < ProjectFeatures.length - 1 && <Divider />}
                          </React.Fragment>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            
            <Link href="/pricing" passHref style={{ textDecoration: 'none' }}>
              <Button color="inherit">Pricing</Button>
            </Link>
            
            <Button variant="contained" color="primary">
              Sign In
            </Button>

            <IconButton 
              sx={{ ml: 1 }} 
              onClick={toggleTheme} 
              color="inherit"
              aria-label="toggle dark mode"
            >
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

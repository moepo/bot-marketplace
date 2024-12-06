import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface LayoutProps {
  children: ReactNode;
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Layout({ children, mode, toggleTheme }: LayoutProps) {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      bgcolor: 'background.default',
      color: 'text.primary'
    }}>
      <Header 
        mode={mode} 
        toggleTheme={toggleTheme} 
      />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: 'background.default',
          color: 'text.primary'
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

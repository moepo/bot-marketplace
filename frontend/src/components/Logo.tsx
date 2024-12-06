import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const LogoIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  backgroundColor: theme.palette.primary.main,
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  transform: 'rotate(15deg)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'rotate(0deg)',
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  letterSpacing: '-0.05em',
  color: theme.palette.text.primary,
}));

export default function Logo() {
  return (
    <LogoContainer>
      <LogoIcon>
        D
      </LogoIcon>
      <LogoText variant="h5">
        Debot.link
      </LogoText>
    </LogoContainer>
  );
}

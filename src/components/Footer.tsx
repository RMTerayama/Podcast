import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Footer = () => (
  <Box sx={{
    bgcolor: '#FFE066',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 2, px: { xs: 2, md: 8 },
    mt: 3,
    borderRadius: 2,
    fontWeight: 600
  }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography variant="body2">lucasdias740@gmail.com</Typography>
    </Box>
    <Box>
      <IconButton><InstagramIcon /></IconButton>
      <IconButton><YouTubeIcon /></IconButton>
      <IconButton><MusicNoteIcon /></IconButton>
    </Box>
  </Box>
);

export default Footer;

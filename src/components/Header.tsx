import { Box, AppBar, Toolbar, InputBase, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import logoPodcast from '../assets/logoPodcast.png';

const Header = () => (
  <AppBar
    position="static"
    sx={{
      bgcolor: '#FFE066',
      color: '#212121',
      boxShadow: 'none',
      px: { xs: 2, md: 8 },
      py: 1,
      borderBottom: '1.5px solid #FFCB05'
    }}
  >
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <img src={logoPodcast} alt="Logo Podcast" style={{ width: 62, height: 62 }} />
        <Box
          sx={{
            bgcolor: '#FFF',
            borderRadius: 99,
            display: 'flex',
            alignItems: 'center',
            px: 2,
            ml: 2,
            minWidth: 160
          }}
        >
          <InputBase placeholder="Buscar..." sx={{ ml: 1, flex: 1 }} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Box sx={{ fontWeight: 700, fontSize: 18, mr: 2 }}>PRÓXIMOS PODCAST</Box>
        <IconButton color="inherit"><InstagramIcon /></IconButton>
        <IconButton color="inherit"><YouTubeIcon /></IconButton>
        <IconButton color="inherit"><MusicNoteIcon /></IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;

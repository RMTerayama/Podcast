import Header from './components/Header';
import BannerApresentador from './components/BannerApresentador';
import SobrePodcast from './components/SobrePodcast';
import UltimoPodcast from './components/UltimoPodcast';
import UltimosPosts from './components/UltimosPosts';
import Patrocinadores from './components/Patrocinadores';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import malha from './assets/malha.png';

function App() {
  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', bgcolor: '#FFF', position: 'relative', overflow: 'hidden' }}>
      {/* Malha de fundo */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 0,
          width: '100vw',
          height: 340,
          top: 0,
          left: 0,
          background: `url(${malha}) repeat-x top left/cover`,
          opacity: 0.12,
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Header />
        {/* Topo: apresentador + sobre */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: 6,
            alignItems: 'flex-start',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            px: { xs: 2, md: 8 },
            mt: 5,
          }}
        >
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <BannerApresentador />
          </Box>
         
        </Box>
        {/* Último podcast */}
        <Box sx={{ width: '100%', mt: 5, px: { xs: 2, md: 8 } }}>
          <UltimoPodcast />
        </Box>
        {/* Últimos posts */}
        <Box sx={{ width: '100%', mt: 4, px: { xs: 2, md: 8 } }}>
          <UltimosPosts />
        </Box>
        {/* Patrocinadores */}
        <Box sx={{ width: '100%', mt: 5, px: { xs: 2, md: 8 } }}>
          <Patrocinadores />
        </Box>
        {/* Rodapé */}
        <Footer />
      </Box>
    </Box>
  );
}

export default App;

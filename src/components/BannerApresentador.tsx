import { Box, Typography } from '@mui/material';
import apresentadorImg from '../assets/apresentador.png';
import pointer from '../assets/pointer.png';
import { keyframes } from '@emotion/react';

// Animação LED "No Ar"
const blink = keyframes`
  0%, 17%   { color: #000; text-shadow: none; opacity: 1; }
  18%, 19%  { color: #D41317; text-shadow: 0 0 14px #f44; opacity: 1; }
  20%, 37%  { color: #D41317; text-shadow: 0 0 18px #f33, 0 0 12px #f33; opacity: 0.85; }
  38%, 41%  { color: #000; text-shadow: none; opacity: 0.7;}
  42%, 61%  { color: #D41317; text-shadow: 0 0 10px #f33; opacity: 1; }
  62%, 68%  { color: #000; text-shadow: none; opacity: 0.8; }
  69%, 100% { color: #D41317; text-shadow: 0 0 18px #f33, 0 0 12px #f33; opacity: 1; }
`;

// Destaque para "PLAYCAST" no título
const titulo = (
  <>
    Bem-vindo ao <span style={{ fontWeight: 800, fontFamily: "'Poppins', Arial, sans-serif", color: '#e8b100', letterSpacing: 2 }}>PLAYCAST</span>
    <img src={pointer} alt="" style={{ width: 38, marginLeft: 12, verticalAlign: 'middle' }} />
  </>
);

const BannerApresentador = () => (
  <Box sx={{
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: { xs: 2, md: 5 },
    flexDirection: { xs: 'column', md: 'row' },
    width: '100%',
    py: 2,
    px: 0,
    maxWidth: 1100
  }}>
    <Box sx={{ position: 'relative', width: { xs: 170, md: 220 }, height: { xs: 170, md: 220 }, flexShrink: 0 }}>
      <img
        src={apresentadorImg}
        alt="Apresentador"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 28,
          objectFit: 'cover',
          boxShadow: '0 4px 30px rgba(0,0,0,0.13)'
        }}
      />
      {/* "No Ar" animado */}
      <Typography
        variant="h6"
        sx={{
          position: 'absolute',
          top: 18,
          left: 20,
          fontFamily: "'More Sugar', cursive",
          fontSize: { xs: 22, md: 32 },
          fontWeight: 800,
          letterSpacing: 3,
          px: 1.8,
          borderRadius: 3,
          bgcolor: '#fffde9cc',
          boxShadow: '0 0 10px #ffd70033',
          zIndex: 3,
          animation: `${blink} 2.8s infinite both`,
          transition: 'color 0.1s, text-shadow 0.15s, opacity 0.2s'
        }}
      >
        NO AR
      </Typography>
    </Box>
    <Box sx={{ maxWidth: 650, width: '100%' }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Poppins', Arial, sans-serif",
          fontWeight: 700,
          mb: 1,
          fontSize: { xs: 26, md: 34 },
          color: '#232323',
          letterSpacing: 1,
        }}
      >
        {titulo}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Poppins', Arial, sans-serif",
          fontSize: { xs: 16, md: 18 },
          color: '#434343',
          mb: 1,
          mt: 1,
          lineHeight: 1.62,
          letterSpacing: 0.06,
          whiteSpace: 'pre-line'
        }}
      >
        {`O que é no Playcast:\n🎙️ O Playcast é um podcast leve e divertido sobre o universo geek!
Toda semana, trazemos convidados especiais para um bate-papo descontraído sobre filmes, séries, games, quadrinhos, eventos e tudo o que movimenta a cultura pop. Também falamos de carreira, criatividade, comportamento e as curiosidades por trás dos bastidores do mundo nerd.
É informação, entretenimento e boas risadas em um só lugar! Vem com a gente nessa viagem geek.`}
      </Typography>
    </Box>
  </Box>
);

export default BannerApresentador;

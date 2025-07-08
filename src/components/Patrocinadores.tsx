import { Box, Typography } from '@mui/material';
import patro1 from '../assets/patrocinadores/1.png';
import patro2 from '../assets/patrocinadores/2.png';
import patro3 from '../assets/patrocinadores/3.png';
import patro4 from '../assets/patrocinadores/4.png';
import patro5 from '../assets/patrocinadores/5.png';
import patro6 from '../assets/patrocinadores/6.png';

const patrocinadores = [
  { img: patro1, alt: 'Patrocinador 1' },
  { img: patro2, alt: 'Patrocinador 2' },
  { img: patro3, alt: 'Patrocinador 3' },
  { img: patro4, alt: 'Patrocinador 4' },
  { img: patro5, alt: 'Patrocinador 5' },
  { img: patro6, alt: 'Patrocinador 6' },
];

const Patrocinadores = () => (
  <Box
    sx={{
      width: '100%',
      py: { xs: 4, md: 6 },
      px: { xs: 2, md: 6 },
      borderRadius: 5,
      mt: 4,
      mb: 2,
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      background: 'linear-gradient(90deg, #e8b100 0%, #ffcb05 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 800,
        letterSpacing: 1.5,
        color: '#fffde9',
        mb: 1,
        textShadow: '0 2px 8px #c48c00, 0 1px 1px #ad8b15',
      }}
    >
      PATROCINADORES
    </Typography>

    <Box
      sx={{
        display: 'flex',
        gap: { xs: 3, md: 6 },
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      {patrocinadores.map((patro, i) => (
        <Box
          key={i}
          sx={{
            p: { xs: 1, md: 2 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 120,
            minHeight: 120,
            transition: 'transform 0.18s',
            '&:hover': {
              transform: 'scale(1.08)',
            },
          }}
        >
          <img
            src={patro.img}
            alt={patro.alt}
            style={{
              height: '92px',
              maxWidth: '210px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 1px 8px rgba(80,60,0,0.08))',
              transition: 'filter 0.2s',
            }}
          />
        </Box>
      ))}
    </Box>
  </Box>
);

export default Patrocinadores;

import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import chatBaloes from '../assets/conversation.png'; // balão de chat
import doodleLines from '../assets/pointer.png'; // doodle linhas
import playControl from '../assets/playControl.png'; // ícone play personalizado

const descricao = `VAMOS RECEBER O VEREADOR MARCO SILVA, QUE ESTÁ EM SEU PRIMEIRO MANDATO NA CÂMARA MUNICIPAL DE TRÊS LAGOAS. ELE VEM SE DESTACANDO POR PROJETOS NAS ÁREAS DE MEIO AMBIENTE, INCLUSÃO SOCIAL, DEFESA ANIMAL E MUITO MAIS. VAMOS FALAR SOBRE OS PROJETOS QUE ELE JÁ APROVOU, AS IDEIAS QUE ESTÃO EM ANDAMENTO E OS DESAFIOS DE SER UM VEREADOR DE PRIMEIRA VIAGEM. UMA CONVERSA QUE MISTURA POLÍTICA LOCAL, REPRESENTATIVIDADE E O IMPACTO DIRETO NA VIDA DA POPULAÇÃO.`;

const UltimoPodcast = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          borderRadius: 5,
          overflow: 'hidden',
          bgcolor: '#ffe066',
          boxShadow: '0 10px 38px 0 rgba(220,200,20,0.13)',
          py: { xs: 4, md: 7 },
          px: { xs: 2, md: 10 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
          gap: { xs: 4, md: 8 },
          minHeight: { xs: 480, md: 390 },
        }}
      >
        {/* Balão doodle */}
        <motion.img
          src={chatBaloes}
          alt=""
          style={{
            position: 'absolute',
            top: 22,
            left: 32,
            width: 100,
            zIndex: 3,
            opacity: 0.86
          }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.86 }}
          transition={{ delay: 0.45, type: "spring", stiffness: 220 }}
        />
        {/* Doodle Lines */}
        <motion.img
          src={doodleLines}
          alt=""
          style={{
            position: 'absolute',
            bottom: 20,
            right: 26,
            width: 62,
            zIndex: 3,
            opacity: 0.93,
            transform: 'rotate(17deg)'
          }}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 0.93 }}
          transition={{ delay: 0.8, duration: 0.7, type: "tween" }}
        />

        {/* Lado esquerdo */}
        <Box
          sx={{
            position: 'relative',
            flex: 1.2,
            minWidth: 320,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              mb: 2,
              color: '#1d1400',
              textTransform: 'uppercase',
              letterSpacing: 2,
              fontSize: { xs: 22, md: 27 }
            }}
          >
            ÚLTIMO PODCAST
          </Typography>
          {/* Descrição sem o papel rasgado */}
          <Box sx={{ pl: 3, pr: 2, py: 1.5 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: 17,
                color: '#232323',
                fontWeight: 500,
                textAlign: 'justify',
                textShadow: '0 1px 1px #fff7b3',
                lineHeight: 1.42,
                letterSpacing: 0.01
              }}
            >
              {descricao}
            </Typography>
          </Box>
        </Box>

        {/* Lado direito - vídeo + play */}
        <Box
          sx={{
            position: 'relative',
            flex: 1.6,
            minWidth: { xs: 320, md: 440 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2,
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              width: { xs: '96vw', sm: 390, md: 460 },
              height: { xs: 220, sm: 225, md: 260 },
              maxWidth: '99%',
              borderRadius: 5,
              overflow: 'hidden',
              boxShadow: '0 3px 20px #bba82245',
              background: '#232323',
              mb: { xs: 3, md: 3 },
            }}
            component={motion.div}
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.9, type: 'spring' }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LWrVuJ-AvqY?si=HVWcLKQ23jO_zp9o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ display: 'block', width: '100%', height: '100%' }}
            ></iframe>
          </Box>
          {/* Botão Play animado */}
          <motion.img
            src={playControl}
            alt="Play"
            style={{
              width: '20vw',
              height: '8vh',
              marginTop: 8,
              filter: 'drop-shadow(0 5px 15px #c9ad1d44)'
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 260 }}
            whileHover={{ scale: 1.13, rotate: -6 }}
            whileTap={{ scale: 0.94, rotate: 3 }}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default UltimoPodcast;

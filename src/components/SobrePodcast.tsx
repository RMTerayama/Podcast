import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import paper from '../assets/paper.png';

const bullets = [
  "Entrevistas com convidados especiais; influenciadores, geeks, cosplayers, artistas, músicos, autores, atletas e personalidades locais.",
  "Conteúdo geek: debates, curiosidades sobre filmes, séries, clubes, games, eventos e notícias.",
  "Episódios ao vivo e gravados, transmitidos pelas redes.",
  "Parcerias locais: apoio de produtores culturais, comércio, amigos, geeks.",
  "Espaço aberto para debate, entretenimento e informação.",
  "Participação do público: temas, perguntas e sugestões.",
  "Criação de conteúdo: vídeos, agenda e bastidores.",
  "Presença nas redes sociais, YouTube e plataformas de áudio."
];

const SobrePodcast = () => (
  <Box sx={{ mt: 2, mb: 2, px: 3, maxWidth: 560, position: 'relative', zIndex: 1 }}>
    <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#FFC107' }}>
      O QUE TEM NO PLAYCAST:
    </Typography>
    <List>
      {bullets.map((item, i) => (
        <ListItem key={i} sx={{ py: 0 }}>
          <ListItemIcon sx={{ minWidth: 30, color: '#FBC02D' }}><RadioButtonCheckedIcon fontSize="small" /></ListItemIcon>
          <ListItemText primary={item} primaryTypographyProps={{ fontSize: 15 }} />
        </ListItem>
      ))}
    </List>
    {/* Doodle decorativo no canto */}
    <img src={paper} alt="" style={{
      position: 'absolute',
      right: -34,
      bottom: -18,
      width: 140,
      opacity: 0.15,
      pointerEvents: 'none',
      zIndex: 0
    }} />
  </Box>
);

export default SobrePodcast;

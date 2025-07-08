import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const posts = [
  { img: '/assets/post1.jpg' },
  { img: '/assets/post2.jpg' }
];

const UltimosPosts = () => (
  <Box sx={{ my: 4, px: 2 }}>
    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
      <span style={{ verticalAlign: 'middle', marginRight: 8 }}>📷</span>
      ÚLTIMOS POSTS DA REDE
    </Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      {posts.map((p, i) => (
        <Card key={i} sx={{ maxWidth: 180 }}>
          <CardMedia component="img" height="140" image={p.img} alt={`post${i + 1}`} />
        </Card>
      ))}
    </Box>
  </Box>
);

export default UltimosPosts;

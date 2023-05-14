import { Footer } from '@/components/Footer';
import { HomePage } from '@/components/HomePage';
import { Navbar } from '@/components/Navbar';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      width={"400px"}
      sx={{
        width: { xl: '1488px', }
      }}
      m={"auto"}
    >
      <Navbar />
      <HomePage />
      <Footer />
    </Box>
  )
}

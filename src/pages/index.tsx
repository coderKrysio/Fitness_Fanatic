import { Footer } from '@/components/Footer';
import { Head } from '@/components/Head';
import { HomePage } from '@/components/HomePage';
import { Navbar } from '@/components/Navbar';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head />
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
    </>
  )
}

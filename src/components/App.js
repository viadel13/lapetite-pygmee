import { Box, Container } from "@mui/material";
import Navbar from "./Navbar/Index";
import Hero from "./Hero/Index";

function App() {
  return (
    <Box>
      <Navbar />
      <Box bgcolor='#eee'>
        <Container  disableGutters sx={{ maxWidth: { xs: 'xs', sm: 'md', md: 'xs', lg: 'lg', xl: 'xs' } }}>
          <Hero />
        </Container>
      </Box>
    </Box>
  );
}

export default App;

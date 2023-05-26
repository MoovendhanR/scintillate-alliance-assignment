import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import { Box } from "@chakra-ui/react";

function App() {
  return (
      <Box  bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, purple.300)',
      ]}
      h="100%"
      >
     <AllRoutes/>
      </Box>
  );
}

export default App;

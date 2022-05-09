import { Box, Heading } from "@chakra-ui/react";

import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <Box p={10}>
      <Heading>Ninja's Reading List</Heading>
      <BookList />
      <AddBook />
    </Box>
  );
}

export default App;

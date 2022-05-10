import { Heading, Stack } from "@chakra-ui/react";

import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <Stack spacing={10} position={"relative"} h="100vh">
      <BookList />
      <AddBook />
    </Stack>
  );
}

export default App;

import { Stack } from "@chakra-ui/react";

import AddBook from "./components/AddBook";
import BookListAndDetail from "./components/BookListAndDetail";

function App() {
  return (
    <Stack spacing={10} position={"relative"} h="100vh">
      <BookListAndDetail />
      <AddBook />
    </Stack>
  );
}

export default App;

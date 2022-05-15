import { useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";

import { getBooksQuery } from "../query/book";
import { Book } from "../type";
import BookDeteial from "./BookDeteial";

const BookListAndDetail = () => {
  const [selectedBookId, setSelectedBookId] = useState<string>();

  return (
    <HStack
      h="100%"
      flexDir={{ base: "column", md: "row" }}
      w="100%"
      overflow="hidden"
    >
      <Stack w={"100vw"} p={10} h="100%">
        <BookList setSelectedBookId={setSelectedBookId} />
      </Stack>
      <Stack
        my={10}
        p={10}
        h="100vh"
        bgColor={"purple.400"}
        color="white"
        w="100%"
      >
        {selectedBookId && (
          <BookDeteial
            bookId={selectedBookId}
            onClearBook={() => setSelectedBookId("")}
          />
        )}
      </Stack>
    </HStack>
  );
};

export default BookListAndDetail;

const BookList: FC<{ setSelectedBookId: any }> = ({ setSelectedBookId }) => {
  const {
    loading: isLoadingBooks,
    error,
    data: { books = [] } = {},
  } = useQuery<{ books: Book[] }>(getBooksQuery);

  if (isLoadingBooks) return <Spinner />;
  if (error) return <div>Something bad happens : {error.message}</div>;

  return (
    <>
      <Heading textAlign={"center"}>Ninja's Reading List</Heading>

      <Flex pl={4} flexWrap="wrap" justifyContent={"center"}>
        {books.map((book) => (
          <Box
            key={book.id}
            onClick={() => setSelectedBookId(book.id)}
            cursor="pointer"
            w="fit-content"
            m={2}
          >
            <Button variant={"outline"} borderColor="black">
              {book.name}
            </Button>
          </Box>
        ))}
      </Flex>
    </>
  );
};

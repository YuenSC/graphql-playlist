import { useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { getBooksQuery } from "../query/book";
import { Book } from "../type";
import BookDeteial from "./BookDeteial";

type BookListApiResponse = {
  books: Book[];
};

const BookList = () => {
  const [selectedBookId, setSelectedBookId] = useState<string>();

  const {
    loading: isLoadingBooks,
    error,
    data: { books = [] } = {},
  } = useQuery<BookListApiResponse>(getBooksQuery);

  if (isLoadingBooks) return <div>Loading Book</div>;
  if (error) return <div>Something bad happens : {error.message}</div>;

  return (
    <HStack h="100%">
      <Stack w={"50vw"} p={10} h="100%">
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
      </Stack>
      <Stack
        my={10}
        p={10}
        h="100%"
        flex={1}
        bgColor={"purple.400"}
        color="white"
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

export default BookList;

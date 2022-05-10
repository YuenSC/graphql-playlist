import { useQuery } from "@apollo/client";
import { CloseButton, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";

import { getBookQuery } from "../query/book";
import { Book } from "../type";

const BookDeteial: FC<{ bookId: string; onClearBook: () => void }> = ({
  bookId,
  onClearBook,
}) => {
  const { loading: isLoadingBook, data: { book } = {} } = useQuery<{
    book: Book;
  }>(getBookQuery, {
    variables: { bookId },
  });

  if (!bookId) return <Text>No book selected</Text>;

  if (isLoadingBook) return <Text>Loading Book ...</Text>;
  if (!book) return <Text>Something is wrong with the book</Text>;

  console.log("book :>> ", book);
  return (
    <Stack>
      <HStack>
        <Heading fontSize={"xl"}>Details</Heading>
        <CloseButton onClick={onClearBook} />
      </HStack>
      <DisplayItem label="Name" value={book?.name} />
      <DisplayItem label="Genre" value={book?.genre} />
      {book?.author && (
        <Text>
          Created by {book?.author?.name}, a {book?.author?.age} years old
          person
        </Text>
      )}
    </Stack>
  );
};

export default BookDeteial;

export const DisplayItem: FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <HStack>
      <Text>{label}</Text>
      <Text>: </Text>
      <Text>{value}</Text>
    </HStack>
  );
};

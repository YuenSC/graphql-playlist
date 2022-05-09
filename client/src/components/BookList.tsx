import { gql, useQuery } from "@apollo/client";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

import { Book } from "../type";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

type BookListApiResponse = {
  books: Book[];
};

const BookList = () => {
  const {
    loading,
    error,
    data: { books = [] } = {},
  } = useQuery<BookListApiResponse>(getBooksQuery);

  if (loading) return <div>Loading Book</div>;
  if (error) return <div>Something bad happens : {error.message}</div>;

  return (
    <UnorderedList pl={4}>
      {books.map((book) => (
        <ListItem key={book.id}>{book.name}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default BookList;

import { gql } from "@apollo/client";

export const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

export const getBookQuery = gql`
  query ($bookId: ID!) {
    book(id: $bookId) {
      id
      name
      genre
      author {
        name
        age
      }
    }
  }
`;

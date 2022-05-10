import { gql } from "@apollo/client";

export const getAuthorQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

export const addBookQuery = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
    }
  }
`;

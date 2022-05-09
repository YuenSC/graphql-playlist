import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";

import { Author } from "../type";

const getAuthorQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

type AuthorListApiResponse = {
  authors: Author[];
};

const AddBook = () => {
  const toast = useToast();
  const { register, handleSubmit, control } = useForm();

  const {
    loading,
    error,
    data: { authors = [] } = {},
  } = useQuery<AuthorListApiResponse>(getAuthorQuery);

  console.log("authors :>> ", authors);

  const handleAddBook = (value: any) => {
    console.log("value :>> ", value);
  };

  return (
    <Stack
      spacing={4}
      p={4}
      as="form"
      id="add-book"
      maxW={{ base: "100vw", xl: "50vw" }}
      onSubmit={handleSubmit(handleAddBook)}
    >
      <FormControl>
        <FormLabel>Book name:</FormLabel>
        <Input type="text" {...register("name")} />
      </FormControl>
      <FormControl>
        <FormLabel>Genre:</FormLabel>
        <Input type="text" {...register("genre")} />
      </FormControl>
      <Controller
        control={control}
        name="authorId"
        render={() => (
          <FormControl>
            <FormLabel>Author :</FormLabel>
            <Select>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <Button type="submit" bgColor={"purple.300"} w="fit-content">
        Add
      </Button>
    </Stack>
  );
};

export default AddBook;

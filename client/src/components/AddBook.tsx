import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { addBookQuery, getAuthorQuery } from "../query/author";
import { getBooksQuery } from "../query/book";
import { Author } from "../type";

type AuthorListApiResponse = {
  authors: Author[];
};

type AuthorGetApiParams = {
  name: string;
  genre: string;
  authorId?: string;
};

const AddBook = () => {
  const { register, handleSubmit, control, reset } =
    useForm<AuthorGetApiParams>();

  const [addBook, { loading: isAddingBook }] = useMutation<{
    addBook: AuthorGetApiParams;
  }>(addBookQuery);

  const { loading: isLoadingAuthors, data: { authors = [] } = {} } =
    useQuery<AuthorListApiResponse>(getAuthorQuery);

  const handleAddBook: SubmitHandler<AuthorGetApiParams> = async (value) => {
    console.log("value :>> ", value);
    await addBook({
      variables: value,
      refetchQueries: [getBooksQuery],
    });
    reset();
  };

  return (
    <Stack
      pos="absolute"
      bottom={0}
      spacing={4}
      minW={"500px"}
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
            <Skeleton isLoaded={!isLoadingAuthors}>
              <Select>
                {authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </Select>
            </Skeleton>
          </FormControl>
        )}
      />
      <Button
        type="submit"
        bgColor={"purple.300"}
        w="fit-content"
        isLoading={isAddingBook}
      >
        Add
      </Button>
    </Stack>
  );
};

export default AddBook;

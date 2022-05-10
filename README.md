# GraphQL Tutorial

This is a code-along of a grpahql tutorial from https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f

This reamde try to record any useful thinig by the lecture number in the above youtube playlist.

Reference :

1. [git in github](https://github.com/YuenSC/graphql-playlist)

## L6

1. use express-graphql to enable graphql in express
2. need to build a schema before using

## L7 (Build schema)

1. define object type
2. fields in object type should be a function if need to know other object type

## GraphQL Tutorial #8 - Root Query

1. root query is how we initially jump into a graph

## GraphQL Tutorial #9 - The Resolve Function

1. resolve function give what is return from query

## GraphQL Tutorial #10 - Testing Queries in Graphiql

1. can just pass the below to enable graphiql

```
graphiql: true
```

## GraphQL Tutorial #11 - GraphQL ID Type

1. GraphQLID

## GraphQL Tutorial #13 - Type Relations

1. use parent in resolve function to get the current object type
2. then find the assoicated object type and return in

## GraphQL Tutorial #14 - GraphQL Lists

1. new GraphQLList(ObjectType)
2. Problem of non function fields in object type

   1. Bidirectional Reference Error

## GraphQL Tutorial #15 - More on Root Queries

1. return a list of book/authors in root query

## GraphQL Tutorial #16 - Connecting to mLab

1. mLab is not here now, use Mongodb Atlas
2. when enter the password, the # in password may cause escape charater. use encodeURIComponent to prevent this

## GraphQL Tutorial #18 - Mutations

1. create an object type called mutation
2. save the data in mongodb but the save function
3. return the res of save function to the resolve function

## GraphQL Tutorial #20 - Updating the Resolve Functions

1. return a list by find function
2. findById function

## GraphQL Tutorial #21 - GraphQL NonNull

1. Non null field

## GraphQL Tutorial #33 - Re-fetching Queries

1. mutate then fetch by refetchQueries (the loading state is missing ? seem need to find it)

## Later

There are lots of changes that I want to added in the react app, so I have not followed the vidoe exactly. But overall I follow the style and functionality

1. Add typescript
2. use functional component
3. use hooks from appollo

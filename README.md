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

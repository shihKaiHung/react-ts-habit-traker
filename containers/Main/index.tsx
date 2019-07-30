import React from "react";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const GET_BOOKS = gql`
  {
 allPosts{
    id,
    title,
    createdAt
  }
  }
`;

export const Main = () => {
  return (
      <Query  query={GET_BOOKS}>
          {({ data }) => {
              console.log(data)
              return (
                  <div>hi</div>
              )
          }}
      </Query>
  );
};


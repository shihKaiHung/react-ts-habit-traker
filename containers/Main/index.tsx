import React from "react";
import { DateList } from "../../components/DateList";
import { HabitList } from "../../components/HabitList/indes";
import { Header } from "../../components/Header";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const GET_BOOKS = gql`
  {
    books {
      id
      title
      author
    }
  }
`;

export const Main = () => {
  return (
      <div>
        <Query query={GET_BOOKS}>
          {
            ({loading, error, data}) => {
              return (
                <li>hello</li>
              );
            }
          }
        </Query>
        test
      </div>
  );
};


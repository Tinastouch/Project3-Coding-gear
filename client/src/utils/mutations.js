import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($password: String!, $email: String!) {
    addUser(password: $password, email: $email) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

// export const REMOVE_BOOK = gql`
//   mutation removeBook($bookId: String!) {
//     removeBook(bookId: $bookId) {
//       _id
//       username
//       bookCount
//       savedBooks {
//         bookId
//         authors
//         image
//         link
//         title
//         description
//       }
//     }
//   }
// `;
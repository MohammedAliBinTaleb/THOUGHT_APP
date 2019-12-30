import gql from "graphql-tag";
export const allUser = gql`
    {
        users {
            id
            fullname
            username
            password
        }
    }
`;
export const DisplayAllpostUser = gql`
    query add($id: String!) {
        user(id: $id) {
            username
            email
            posts {
                id
                text
                image
                date
                comment
                like
            }
        }
    }
`;
export const AddNewUser = gql`
    mutation($fullname: String!, $username: ID!, $password: String!, $email: String!, $age: Int!, $gender: String!) {
        addUsers(
            fullname: $fullname
            username: $username
            password: $password
            email: $email
            age: $age
            gender: $gender
        ) {
            username
        }
    }
`;

export const followersUser = gql`
    query follower($id: String!) {
        user(id: $id) {
            username
            Friends {
                info {
                    username
                    id
                }
                fav
                lastMassage
            }
        }
    }
`;
export const changeFav = gql`
    mutation($UserID: ID!, $followerID: ID!) {
        onStar(userID: $UserID, followerID: $followerID) {
            fav
        }
    }
`;
export const searchByName = gql`
    query($value: String!) {
        SearchByName(username: $value) {
            fullname
            username
        }
    }
`;
export const chatPane = gql`
    query($idUser: String!, $idFriend: String!) {
        chatPanel(idUser: $idUser, idFriend: $idFriend) {
            id
            from {
                id
                fullname
                username
            }
            to {
                fullname
                username
            }
            text
            date
            time
        }
    }
`;
export const addMassage = gql`
    mutation($fromID: String!, $toID: String!, $text: String!) {
        AddMessage(fromID: $fromID, toID: $toID, text: $text) {
            id
        }
    }
`;
export const displayAllpostFriend = gql`
    query($id: String!) {
        user(id: $id) {
            fullname
            username
            allpost {
                image
                text
                date
                like
                comment
                from {
                    fullname
                    username
                }
            }
        }
    }
`;

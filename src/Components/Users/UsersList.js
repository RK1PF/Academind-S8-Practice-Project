// React component to list all users
import Card from "../UI/Cards/Card";
import styles from "./UsersList.module.css";

function UsersList(props) {
  // Render a list of users
  return (
    <Card title="Users List" className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            Username : {user.username} Email : {user.email} Age : {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default UsersList;
import { Fragment, useState, useRef } from "react";
import Card from "../UI/Cards/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

// React component to add a new user
function AddUser(props) {
  // Refs for the input fields
  const usernameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  // initial Form state
  const initialFormState = {
    username: "",
    email: "",
    age: "",
  };
  const initialErrorState = {
    title: "",
    message: [],
    show: false,
  };
  // State for the form
  const [form, setForm] = useState(initialFormState);
  // State for the error message
  const [error, setError] = useState(initialErrorState);
  // Reset states function
  const resetStates = () => {
    setForm(initialFormState);
  };
  // Reset error states function
  const resetErrorStates = () => {
    setError(initialErrorState);
  };
  // Handle input change
  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  // Function to check if username is valid
  const checkUsername = (username = form.username) => {
    // Username regex to check if the username is valid. Alphanumeric string that may include _ and – having a length of 3 to 16 characters.
    const usernameRegex = /^[a-z0-9_-]{3,16}$/;
    return username !== "" ? usernameRegex.test(username) : true;
  };
  // Function to check if email is valid
  const checkEmail = (email = form.email) => {
    // Email regex to check if the email is valid.
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return email !== "" ? emailRegex.test(email) : true;
  };
  // Function to check if age is valid
  const checkAge = (age = form.age) => {
    return age !== "" ? age >= 18 : true;
  };
  // Render a form, and when it's submitted, add the user to the list
  const handleSubmit = (event) => {
    event.preventDefault();
    // If no errors in inputs, add the user to the list and reset the form
    if (checkUsername() && checkEmail() && checkAge()) {
      props.addUser(form);
      resetStates();
      return;
    }
    // else set and show error message modal
    setError({
      title: "Error",
      message:"Check your inputs",
      show: true,
    });
  };

  return (
    <Fragment>
      {error.show && (
        <Modal
          title={error.title}
          buttonLabel="Dismiss"
          message={error.message}
          customContentCSS={true}
          toggleModal={resetErrorStates}
        />
      )}
      <Card
        title="Add New User"
        className={styles.input}
        footer="New User - Practice on React by RK1PF 🔥"
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className={checkUsername ? null : styles.invalid}
            required
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleInputChange}
            ref={usernameRef}
          />
          <label htmlFor="email">Email</label>
          <input
            className={checkEmail ? null : styles.invalid}
            required
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
            ref={emailRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            className={checkAge ? null : styles.invalid}
            required
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleInputChange}
            value={form.age}
            ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import { fetchContacts } from "../../redux/contactsOps";
import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Телефонна книга контактів</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import {
  selectIsError,
  selectIsLoading,
  selectFilteredContacts,
} from "../../redux/contactsSlice.js";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  if (isError) {
    return <h2>Помилка завантаження...</h2>;
  }

  if (isLoading) {
    return <h2>Завантаження...</h2>;
  }

  if (contacts.length === 0) {
    return <h2 className={css.title}>Ваша книга контактів ще пуста.</h2>;
  }

  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact {...contact} />
          </li>
        );
      })}
    </ul>
  );
}

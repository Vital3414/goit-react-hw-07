import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNaneFilter } from "../../redux/filterSlice.js";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNaneFilter);

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {visibleContact.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact {...contact} />
          </li>
        );
      })}
    </ul>
  );
}

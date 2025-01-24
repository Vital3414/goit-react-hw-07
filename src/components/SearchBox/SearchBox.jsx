import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filterSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.container}>
      <p>Пошук за імʼям</p>
      <input
        className={css.list}
        type="text"
        placeholder="Поле пошуку"
        onChange={handleChange}
      />
    </div>
  );
}

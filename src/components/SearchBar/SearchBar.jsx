import Css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handlSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
  
    onSubmit(
      form.elements.images.value,
    );

    form.reset()
  };
  return (
    <header className={Css.header}>
      <form className={Css.form} onSubmit={handlSubmit}>
        <input
          className={Css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="images"
        />
        <button className={Css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

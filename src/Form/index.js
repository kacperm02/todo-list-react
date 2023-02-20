import "./style.css";

const Form = () => (
    <form className="form__grid">
        <input className="form__tasks" placeholder="Wpisz zadanie" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;
import "./style.css";

const Button = () => (
    <button className="button">
        <a
          className="button__link"
          href="https://www.nbp.pl/home.aspx?f=/kursy/kursya.html"
          title="Currency rates on NBP website"
          alt="link for avarege currency rates - NBP website"
        >
          Check avarage exchange rates - NBP
        </a>
      </button>
);

export default Button;
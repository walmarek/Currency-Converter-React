import "./style.css";

const Section = () => {
  return (
    <section className="section"> 
      <div className="section__link">
        Rates updated on 31/12/2022.&emsp;
        <a
          className="link"
          href="https://www.nbp.pl/home.aspx?f=/kursy/kursya.html"
          title="Avarage currency exchange rates NBP"
          alt="NBP website link exchange rates"
        >
          Check avarage exchange rates NBP - link
        </a>
      </div>
    </section>
  );
};

export default Section;

import "./style.css";

const Form = ({ body, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit} className="form">
      {body}
    </form>
  );
};

export default Form;

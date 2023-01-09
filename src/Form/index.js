import "./style.css";

const Form = ({ body, onFormSubmit }) => 
    <form onSubmit={onFormSubmit} className="form">
      {body}
    </form>
  


export default Form;

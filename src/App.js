import Button from "./Button";
import Select from "./Select";
import Label from "./Label";
import Fieldset from "./Fieldset";
import Input from "./Input";
import Form from "./Form";

function App() {
  return (
    <div className="container">
      <Form>
        <Fieldset>
          <Label>
            <Input />
            <Select />
          </Label>
          <Label>
            <Input />
            <Select />
          </Label>
        </Fieldset>
      </Form>
      <Button />
    </div>
  );
}

export default App;

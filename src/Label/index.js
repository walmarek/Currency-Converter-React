import "./style.css"

const Label = (body) => (
    <label className="form__label">
            <p>
              <span className="form__labelText">From:</span>
              <input
                className="form__field"
                type="number"
                step="any"
                min="10"
                max="100000"
                minlength="2"
                required
                placeholder="Enter amount"
              />{body}
            </p>
          </label>
);

export default Label;
const Form = ({ addName, newName, onNameChange, newPhone, onPhoneChange }) => {
  return (
    <form onSubmit={addName}>
      <div>
        <label>
          name: <input value={newName} onChange={onNameChange} />
        </label>
        <label>
          phone: <input value={newPhone} onChange={onPhoneChange} />
        </label>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default Form;

import { useState } from "react";
import Search from "./components/Search";
import Form from "./components/Form";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [showPerson, setShowPerson] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      phone: newPhone,
    };

    const personExists = persons.map((person) => person.name.toLowerCase());
    const phoneExists = persons.map((person) => person.phone);

    if (
      personExists.includes(nameObject.name.toLowerCase()) ||
      phoneExists.includes(nameObject.phone)
    ) {
      alert(
        `${nameObject.name} or ${nameObject.phone} is already added to phonebook`
      );
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewPhone("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };
  const handlePersonChange = (event) => {
    setShowPerson(event.target.value);
  };

  const personToShow = persons.filter(({ name }) =>
    name.toLowerCase().includes(showPerson)
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Search value={showPerson} onChange={handlePersonChange} />

      <h3>Add a new contact</h3>

      <Form
        addName={addName}
        newName={newName}
        onNameChange={handleNameChange}
        newPhone={newPhone}
        onPhoneChange={handlePhoneChange}
      />

      <h3>Numbers</h3>

      <Person filteredPerson={personToShow} />
    </div>
  );
};

export default App;

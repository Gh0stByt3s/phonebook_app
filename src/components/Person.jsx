const Person = ({ filteredPerson }) => {
  return (
    <div>
      {filteredPerson.map((person) => (
        <p key={person.name}>
          {person.name}: {person.phone}
        </p>
      ))}
    </div>
  );
};
export default Person;

const Main = () => {
  const number = 10;
  const obj = {
    name: "John",
    age: 20,
  };
  return (
    <main>
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "even" : "odd"}</h2>
      <h2>{obj.name}</h2>
      <h2>{obj.age}</h2>
    </main>
  );
};

export default Main;

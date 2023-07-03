function Greeting(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello I am {props.name}</h1>
      <p>I am {props.age} years old</p>
    </div>
  );
}

export default Greeting;

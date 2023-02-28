import './App.css';

function App() {

  function submitHandler(event){

  }

  function handleChange(event){
    // const [name,value] = event.target
    console.log(event.target.name)
    console.log(event.target.value)
  }


  return (
    <div>
        <form onSubmit={submitHandler}>
          <input 
            placeholder='First Name'
            name="firstName"
            onChange={handleChange}
          />
          <input 
            placeholder='Last Name'
            name="lastName"
            onChange={handleChange}
          />
          <br/>
          <button>Add Contact</button>
        </form>
    </div>
  );
}

export default App;

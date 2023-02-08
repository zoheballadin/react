import axios from 'axios';
import './App.css';

function App() {
  const onSubmit = async(e) =>{
    e.preventDefault();
    const formData = new FormData();
    console.log(e.target.book.files)
    formData.append("book", e.target.book.files[0])
    let {data} = await axios.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    console.log(data)
  }
  return (
    <div className="App">
      <form onSubmit={onSubmit}  >
        <input type="file" name="book" id="book" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;

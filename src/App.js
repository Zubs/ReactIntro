import './App.css';

function App() {
  const title = "Welcome here";
  const likes = 50;
  const link = "https://zubs.github.io";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked by { likes } people as at { (new Date()).toDateString() }</p>
        <br/>
        <br/>
        <br/>
        <p>Built by <a href={ link } target="_blank">me</a></p>
      </div>
    </div>
  );
}

export default App;

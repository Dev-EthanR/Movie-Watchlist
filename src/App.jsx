function App() {
  fetch(
    `http://www.omdbapi.com/?apikey=${
      import.meta.env.VITE_API_KEY
    }?t=transformers&y=2007`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;

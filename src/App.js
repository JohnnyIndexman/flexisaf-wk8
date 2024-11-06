// import Container from "@mui/material/Container";
import "./App.css";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import CardItems from "./components/CardItems";
import Layout from "./components/Layout";
// import Header from './components/Header';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("https://jsonplaceholder.typicode.com/posts" + id, {
      method: "DELETE",
    });

    const newData = data.filter((d) => d.id !== id);
    setData(newData);
  };
  return (
    <Layout>
      <Box className="App">
        <Grid container spacing={2}>
          {data.map((d) => (
            <Grid item xs={12} md={6} lg={3} key={d.id}>
              <CardItems data={d} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export default App;

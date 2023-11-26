import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server Is Ready");
});

// Get A List of Five Jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A First Joke",
      content: "This Is A First Joke",
    },
    {
      id: 2,
      title: "A Second Joke",
      content: "This Is A Second Joke",
    },
    {
      id: 3,
      title: "A Third Joke",
      content: "This Is A Third Joke",
    },
    {
      id: 4,
      title: "A Fourth Joke",
      content: "This Is A Fourth Joke",
    },
    {
      id: 5,
      title: "A Fifth Joke",
      content: "This Is A Fifth Joke",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server Is Listening On Port : ${port}`);
});

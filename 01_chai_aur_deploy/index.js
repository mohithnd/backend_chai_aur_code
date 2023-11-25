const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT;

const githubData = {
  login: "mohithnd",
  id: 108994458,
  node_id: "U_kgDOBn8fmg",
  avatar_url: "https://avatars.githubusercontent.com/u/108994458?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/mohithnd",
  html_url: "https://github.com/mohithnd",
  followers_url: "https://api.github.com/users/mohithnd/followers",
  following_url: "https://api.github.com/users/mohithnd/following{/other_user}",
  gists_url: "https://api.github.com/users/mohithnd/gists{/gist_id}",
  starred_url: "https://api.github.com/users/mohithnd/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/mohithnd/subscriptions",
  organizations_url: "https://api.github.com/users/mohithnd/orgs",
  repos_url: "https://api.github.com/users/mohithnd/repos",
  events_url: "https://api.github.com/users/mohithnd/events{/privacy}",
  received_events_url: "https://api.github.com/users/mohithnd/received_events",
  type: "User",
  site_admin: false,
  name: "Mohit Agrawal",
  company: "https://www.linkedin.com/in/mohit-agrawal-41b45a202/",
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 20,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2022-07-09T17:10:29Z",
  updated_at: "2023-11-22T04:31:35Z",
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("Mohit Agrawal");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login At Chai Aur Code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai Aur Code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`App Listening On Port : ${port}`);
});

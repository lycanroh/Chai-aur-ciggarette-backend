const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000
const githubData={
    "login": "lycanroh",
    "id": 113545669,
    "node_id": "U_kgDOBsSRxQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/113545669?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lycanroh",
    "html_url": "https://github.com/lycanroh",
    "followers_url": "https://api.github.com/users/lycanroh/followers",
    "following_url": "https://api.github.com/users/lycanroh/following{/other_user}",
    "gists_url": "https://api.github.com/users/lycanroh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lycanroh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lycanroh/subscriptions",
    "organizations_url": "https://api.github.com/users/lycanroh/orgs",
    "repos_url": "https://api.github.com/users/lycanroh/repos",
    "events_url": "https://api.github.com/users/lycanroh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lycanroh/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rohit Saha",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-09-14T17:17:35Z",
    "updated_at": "2024-01-28T18:30:39Z"
}
app.get('/', (req, res) => {
   res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('rohitdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai sutta aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur Code Karo</h2>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})
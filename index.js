require('dotenv').config()
const express=require('express')
const app=express()
const gith={
    "login": "varnitsaxena7",
    "id": 118539746,
    "node_id": "U_kgDOBxDF4g",
    "avatar_url": "https://avatars.githubusercontent.com/u/118539746?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/varnitsaxena7",
    "html_url": "https://github.com/varnitsaxena7",
    "followers_url": "https://api.github.com/users/varnitsaxena7/followers",
    "following_url": "https://api.github.com/users/varnitsaxena7/following{/other_user}",
    "gists_url": "https://api.github.com/users/varnitsaxena7/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/varnitsaxena7/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/varnitsaxena7/subscriptions",
    "organizations_url": "https://api.github.com/users/varnitsaxena7/orgs",
    "repos_url": "https://api.github.com/users/varnitsaxena7/repos",
    "events_url": "https://api.github.com/users/varnitsaxena7/events{/privacy}",
    "received_events_url": "https://api.github.com/users/varnitsaxena7/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 24,
    "public_gists": 0,
    "followers": 3,
    "following": 0,
    "created_at": "2022-11-18T13:14:07Z",
    "updated_at": "2024-03-26T10:34:49Z"
  }
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/twitter',(req,res)=>{
    res.json(gith)
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at varnit</h1>')
})

app.listen(process.env.PORT,()=>
{
    console.log('Example app listening at port' )
}) 
<h1 align="center">
    <img alt="LinkApi Movies" src="https://cdn.linkapi.com.br/api-movies-images/logo-verde.svg" width="300px" />
</h1>

<blockquote align="center">“Believe in Yourself.”</blockquote>

<p align="center">
  <a href="#bulb-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-build-setup">Build Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

> :warning: The available link (https://api-movies.linkapi.com.br/v1/movies) isn't working, so I created a fake api to consume, built with json-server, see below how to use it.

## :bulb: About

<p>Project created during the LinkApi selection process, where I used the technologies below:</p>

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Json-server](https://www.npmjs.com/package/json-server)

## :computer: Build Setup

**Json-server**
```
yarn json-server server.json -p 3333

# with host
yarn json-server server.json -p 3333 -H 192.0.0.0 (your ip address)
```

**React**

```
# Install all dependencies
yarn install

# Start server at 'http://localhost:3000'
yarn start

# Build for production
yarn build
```

## :memo: License

this project is under the MIT license. See the archive [LICENSE](https://github.com/victorvf/movies-linkapi/blob/master/LICENSE.txt) for more details.
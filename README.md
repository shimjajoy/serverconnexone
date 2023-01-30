
# Project Title

To obtaining server time and the default metrics values
## API Reference

#### Get tokens

```http
  GET /token
```
#### Get time

```http
  GET /time
```
Add HTTP Request headers

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. accessToken |

#### Get metrics

```http
  GET /metrics
```
Add HTTP Request headers

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. accessToken |




## Authors

- [@shimjajoy](https://www.github.com/shimjajoy)


## Installation

Install with npm

```bash
Go to the directory on your local computer where you want to clone the repository.

git clone https://github.com/shimjajoy/serverconnexone.git  (verify that git is already installed on your system, if not please download and install depenig on your os).

go to serverconnexone using the command,cd serverconnexone 

npm i

npm run dev

If npm run was successful.You can see message "[nodemon] starting `node server.js` ".

Open your browser at http://localhost:3500 

If server is up  you can see the message "Server running at 3500."
```
    

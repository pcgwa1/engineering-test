# Cryptocurrency Coverter
### `Author: Peter C Gwaka`
## About

Cryptocurrency Converter is an application that accepts a cryptocurrency code (e.g BTC) and display's its current quote in the following currencies:
### `USD`
### `EUR`
### `BRL`
### `GBP`
### `AUD`

# Tech Stack

## Server
node js >= 12\
Apollo Server

```
Please add a API key for Coin Market Cap by visiting https://pro.coinmarketcap.com/account and generating an API key.
Copy the key and add it to server/datasource.js COIN_MARKET_CAP_API_ACCESS_KEY
```

## Frontend
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
Apollo Client

In the project directory, you can run:

### `yarn setup`
Installs all dependencies and starts the application.

### `yarn start`

Runs the app in the development mode.\
This command concurrently starts the Apollo GraphQL server listerning on [http://localhost:4000](http://localhost:4000)\
And opens the react frontend on [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


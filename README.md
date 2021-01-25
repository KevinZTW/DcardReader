# Dcard Reader

A simple reader to demonstrate Dcard post list

## Usage

To run the application, you could clone the repository and simply execute `npm run dev`, it would install dependencies, build react app and then run application on port 4000 .

```
	$ git clone https://github.com/KevinZTW/DcardReader
	$ cd DcardReader
	$ npm run dev
```

## Structure

### Server

An simple server runs on port 4000 which serve react application as static file and provide api to handle cors request as proxy

### Client (React App)

#### Board Component

- Board component contains state `fetchUrl` which would be fetched through custom hook `useFetchData` returning data and loading status

- Board component would be registered with scroll event through custom hook `useScrollToBottom` which would execute the callback function that chagne the `fetchUrl` in certian interval

#### Post Component

- Simply render post content from `props`

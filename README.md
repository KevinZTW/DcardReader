# Dcard Reader

A simple reader to demonstrate Dcard article list

## Usage

To run the application, you could clone the repository and simply execute `npm run dev`, it would install dependencies, build react application and then run app on port 4000 .

```
	$ git clone https://github.com/KevinZTW/DcardReader
	$ cd ./DcardReader
	$ npm run dev
```

## Structure

### Server

An simple express server run on port 4000 which serve react application as static file and provide api to handle cors request

### Client

- Built `Board` component to fetch and to render articles, fetched data and last article's id would store in component's state
- Used custom hook ( useScrollToBottom ) to register scroll event which activate callback function with debounce mechanism when user scroll to screen's bottom
- when user scroll to screen's bottom, the callback function would add 1 to state - furtherFetch in `Board` component which trigger rerender and useEffect which fetch and set new articles

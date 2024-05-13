# Namaskaram React

## Episode-1

There are many ways in which you can start writing your React code, one using `React.`createElement` and another using **JSX****

## Episode-2

React is not the one that makes web applications faster, the one that makes them faster is the bundlers like Webpack, parcel, Vite and many more.

The bundler does all the stuff like code minimization, image optimization, HMR, and many more.
In the package.json file, you specify the required dependencies, with their version numbers. While mentioning the version numbers. If you include a `^` before the version, it installs the latest version of the app(latest means the upgraded minor number), if `~` is present then it installs the latest version of the app(latest means the upgraded patch number) 

**Some good **practices** are:****
* It is mandatory to include `package.json` and `package-lock.json` so that you can get all the required libraries later when you need to get them installed on the server.

## Episode-3

## Episode-4

Before starting to build any application, just create a basic outline or template. Creating a template ahead of coding will solve a lot of problems with the design.

Config Driven UI

If you are rendering the same component multiple times, or in a loop, it is always a good practice to add a key to the component. If there is no key added to the component, and you have to render it multiple times, then whenever each new component is added all the components are re-rendered once again. Using an index is also a bad practice, as it affects the performance of the application, but it is still comparable to not using keys at all.

## Episode-5

There are two types of exports that are common in React.
They are:
* Named Exports(You can have multiple exports in a file)
```js
// Exporting a Named constant
export const Component;

// Importing a Named constant
import { Component } from "/src/assets/data";
```

* Default Exports(You can only have one export in the file)
```js
// Exporting a Default constant
export default Component;

// Importing a Default constant
import Component from "/src/assets/data";
```

In React Hooks are nothing but, normal JS functions that React gives to us with some specific use case.

React has a special ability that makes it easier for it to manipulate the DOM elements, that is the reason, why it is fast.

Reconciliation Algorithm(Diff Algorithm) is an algorithm, that is the core of the React project, it is the actual reason, why React is fast and it is the main functional component of React.

As the name(diff) says, it uses the difference between old and new virtual dom and updates the UI. It is also known as incremental rendering, the algorithm divides the updating part into different and smaller chunks, which can be rendered concurrently.

It uses Virtual DOM(a data structure) in updating the UI.

## Chapter-6

Monolithic vs Microservices Architecture.

There are two approaches in which you can fetch the data from the API.

* Steps in the first approach
    * Load the Application
    * Make an API Call
    * Render the application
* Steps in the second approach
    * Load the Application
    * Render the application
    * Make an API Call
    * Re-render the application

In the react we use the second approach because it provides a better UX compared to the first one.

At the start, we used CORS plugin, to fetch the Swiggy API data, to bypass this issue, we can use a CORS proxy website, like (corsproxy.io, crossorigin.me and many more)

## Chapter-7

**useState**

We cannot use the useState inside a loop, condition or nested function, it should be used at the top level of the function.

**useEffect**

If the dependency array is not present, it will call the useEffect, whenever the component renders
else if the dependency array is empty, it will only on initial render and once
else it will render whenever the variable in the dependency array changes

Routing is a way through which React enables us to navigate between multiple web pages.

### Routing in webapps

* Server Side Routing
    * When a click is made
    * The request is sent to the server
    * The server will send a response
    * The client will display it
* Client Side Routing(Single page Application)
    * When a click is made
    * The client will render the page by loading the component

In a single-page application, like React, it is just the exchange of components and loading them.

## Chapter-8

Difference between the Class based and Functional Components
> Never compare the performance of the class based and functional components, because the performance of the components is not based on the type of the component, it is based on the way the component is written.

**Class Components**

This is similar to the class in javascript, and it is the old way of creating components in the react. You can find the template of the class component below:

```js
import React from 'react';

class App extends React.Component {
    constructor(props) {   // This is the constructor of the class, which is called whenever the class is created
        super(props)   // This is the super constructor of the class, it is used to call the constructor of the parent class
    }

    componentDidMount() { // This method is called whenever the component is mounted on the screen(after the render method is called)
    // This method is used to make API calls, and other stuff
        console.log("Component Mounted")
    }

    render() { // This method is used to render the component on the screen
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}
```

If the parent and child are both class components, then the order in which the components are mounted is, first the parent component is rendered, then it starts rendering the child component, after mounting all the Child components, it will mount the parent component.

* The react lifecycle has two phases:
    * Render Phase(Has no side effects)
        In the render phase, it will call the constructor, then the render method.
    * Commit Phase(Has side effects)
        In the commit phase, it will call the componentDidMount method.
* Useful Link: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
* When there are multiple components to be rendered, then multiple render cycles are combined into a single render phase.

**React Lifecycle Methods**
In the Mounting phase, the following methods are called:
* constructor
* render
* componentDidMount

The update cycle is called whenever the state or props are updated. This happens in three ways:
* New props are received
* New state is received(setState())
* Force Update is called(forceUpdate())

In the Updating phase, the following methods are called:
* render
* componentDidUpdate

In the Unmounting phase, the following methods are called:
* componentWillUnmount(It is called just after the component is removed from the screen)

DOM Manipulation is the most expensive thing while react is loading a component to the web page.

**Functional Components**

This is similar to functions in javascript, and it is the best type of style in creating components in the react.

## Chapter-9

A single responsible principle is a principle in which a component should only do one thing, and it should do it well.

App Chunking or Code Splitting is an important part of the process of deploying the application. It is the process of splitting the code into smaller chunks so that the application can be loaded faster. (It is also known as lazy loading or dynamic bundling)

To do a lazy loading, the syntax will be

```js
const Component = React.lazy(() => import('./Component Path'));
```

## Chapter-10

Tailwind CSS is a utility-first CSS framework, that is used to build web pages faster. It is a low-level CSS framework, that is used to build the web pages faster.

* Installation
```bash
npm install tailwindcss postcss
```

* Configuration
```bash
npx tailwindcss init
```

* Create a tailwind.config.js file and add the following code
```js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

* Create a postcss.config.js file and add the following code
```js
module.exports = {
  plugins: {
    tailwindcss: {},
  }
}
```

## Chapter-11

We have two layers in any React Application

* UI Layer
    * JSX
    * CSS
* Data Layer
    * States
    * Props
    * JS

The UI layer is generally controlled by the data layer, and the data layer is controlled by the API.

React Developer Tools is one of the best tools to debug the React application, it is available as a Chrome and Firefox extension.

React Context is a way to pass the data from the parent component to the child component, without passing the data through the props. It is like a global variable, that is available to all the components in the application. It is like a global central database.

In react, you can a hook called `useContext` to use the context in the component.
```js
const value = useContext(Context);
```

## Chapter-12

React and [Redux](https://redux.js.org) are two different things, React is a library, and Redux is a state management library.

> Redux is not mandatory in the React application, but it is a good practice to use it in the application.(If your application is large and scalable)

Using Redux helps us debug the application easily.

* Redux store is a JS Object(very big), that contains the entire state of the application.
    * Data is stored as a slice in the redux store.
    * The data is stored in the form of a key-value pair.
* Storing data in the redux store is done via dispatching and action.
    * It calls a function called reducer, which is used to update the slice of the store.
* Reading data from the slice of redux store is done via Selector.
* Using Selector, we can read the data from the store, and use it in the component. (It is called subscribing to the store)

In Vanialla Redux, it is not possible/it is illegal to mutate the state. The state should be immutable.
In the Redux Toolkit, it is possible to mutate the state, and they have to be mutated in the reducer.

If you try to look at the redux state in the console, you will not be able to see the state, because it is a private state, and it is not accessible to the console.


### Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to the application
- Slice (cartSlice)
- dispatch(action)
- Selector

It uses Immer, which is a library that is used to mutate the state in the reducer. (Behind the scenes)
Either return the new state or mutate the existing state in the reducer.

## Chapter-13

### By Developer

Types of testing in React
* Unit Testing
    * Testing one unit/component in isolation
* Integration Testing
    * Testing the interaction between two or more units/components
* End-to-End Testing - e2e Testing 
    * When the user lands on the page, the flow of user actions between different components is called e2e testing.

React Testing Library uses Jest and Babel under the hood.

**Installation**
* Install React testing Library
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

* Install Jest
```bash
npm install --save-dev jest
```

* Install babel dependencies for Jest
```bash
npm install --save-dev babel-jest @babel/preset-env @babel/core @babel/preset-react
```

* Configure the babel in the babel.config.js file
```js
module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }]
    ]
}
```

* Configure the Parcel config file(.parcelrc) to disable default babel transpilation
```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

* Jest Configuration
```bash
npx jest --init
```

* Install JSDOM
```bash
npm install --save-dev jsdom
```

Testing needs to be done on some environment(browser-like), so we use JSDOM, which is a browser-like environment for testing.

To run the test, you can use the following command
```bash
npm run test # npm test
```

The place to write the test is in the `__tests__` folder, or in the same folder as the component.
The regex match for the testing files is: "\*\*/\__tests\__/\*\*/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)"


## Error Tips

* Do not update the state from the event handler functions, if you do so, react will ignore the update.
* If you get any error related to testing components using router-dom functions, then you need to wrap them around `<BrowserRouter>` or `<MemoryRouter>`
* If a component has an async/await, then wrap it in the act function
```js
it("Should fetch some sample data", async () => {
    await act(
        async () => {
            await render(<Component />)
        }
    )
})
```
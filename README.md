# Namaskaram React

## Episode-1

There are many ways in which you can start writing your react code, one using `React.createElement` and other using **JSX**

## Episode-2

React is not the one which makes the web applications faster, the one which makes faster is the bundlers like webpack, parcel, vite and many more like them.

The bundler does all the stuff like, code minimization, image optimization, HMR, and many more.

In package.json file, you specifiy the required dependencies, with there version numbers. While mentioning the version numbers. If you include a `^` before the version, it installs the latest version of the app(latest means the upgraded minor number), if `~` is present then it installs the latest version of the app(latest means the upgraded patch number) 

**Some good practises are:**
* It is mandatory to include `package.json` and `package-lock.json`, so that you can get all the required libraries later when you need to get them to install on the server.

## Episode-3

## Episode-4

Before starting to build any application, just create a basic outline or template. Creating a template ahead of coding will solve a lot of problem with the design.

Config Driven UI

If you are rendering same component multiple times, or in a loop, it is always a good practice to add a key to the component. If there is no key added to the component, and you have to render it multiple times, then whenever each new component is added all the components are re-rendered once again. Using index is also a bad practise, as it effects the performance of the application, but it is still comparable than not using keys at all.

## Episode-5

They are two types of exports which are common in the React.
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

In React Hooks are nothing but, normal JS functions which react gives to us wwith some specific use-case.

React has a special ability that makes it easier for it to manipulate the DOM elements, that is the reason, why it is fast.

Reconiliation Algorithm(Diff Algorithm) is an algorithm, which is the core of the React project, it is the actual reason, why react is fast and it is the main functional component of the react.

As the name(diff) says, it uses the difference between old and new virtual dom's and updates the UI. It is also known as incremental rendering, the algorithm divide the updating part into different and smaller chunks, which can be rendered concurrently.

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

In the react we use second approach, because it provides a better UX compared to the first one.
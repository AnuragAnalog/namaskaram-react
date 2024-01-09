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
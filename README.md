[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Hooks

## Prerequisites

- [react-crud](https://git.generalassemb.ly/ga-wdi-boston/react-crud)

## Objectives

By the end of this, developers should be able to:

- Hook into state from a functional component.
- Use an effect inside of a functional component.

## Preparation

1. Fork and clone this repository. [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Movie API

This project is meant to work along side [this movie API](https://sei-movie-api.herokuapp.com)
to demonstrate creating a basic single page application in React that talks to a
Rails API.

## Hooks Introduction

React is a great framework. It is relatively easy to learn, it has given front
end developers more fluid control, and it might even be a tad fun. It is pretty
new in terms of web development however so you should expect to hear about new
additions to the technology as it gets a larger user base and pain points are
identified.

One of those common points of frustration is sharing behaviour and state logic
between components. There have been different solutions to this problem over
the years, Higher Order Components, Mixins, Render Props, but as of React 16.8
a new API has been added to help mitigate these problems. [React Hooks!](https://reactjs.org/docs/hooks-intro.html)

### Say Goodbye to Class Components

One of the biggest implications that Hooks will have on your application is
eliminating the need for class based components. React does not plan to remove
class components from the framework, but they are basically no longer needed if
you choose to embrace Hooks.

This is a good thing for React itself because lots of JavaScript developers
don't use classes as they are only a syntax on top of constructors and
prototypes. Now developers won't have to learn class syntax just to learn
React. This also means we won't have to worry about binding `this` or
using fat arrow functions to do it for us.

### How to Use Hooks

Before we convert the class components in this repo let's take a look at some
ways to use Hooks.

#### Hooking into State

The most common usage for Hooks is to be able to provide some state to a
functional component. Here is how we normally create some initial state for a
class component.

```javascript
constructor (props) {
  super(props)

  this.state = {
    counter: 0
  }
}
```

Let's see how we can achieve the same thing with Hooks. We won't be inside a
class anymore which will remove the need for `constructor`, `super`, and
referencing `this.`

```javascript
const [counter, setCounter] = useState(0)
```

Just like that we have provided an initial value of `0` for a variable called
`counter`, and we also get a function called `setCounter` that can update the
variable.

`useState` is a function we import from React that accepts a value to
set as the initial state, and it returns an array where the first element is
the initial value, and the second element is a function that can update that
value.

Creating the `counter` and `setCounter` variables grouped with square brackets
is essentially saying to take the array returned from `useState`, and the first
element should be the value of `counter` while the second element will be the
value of `setCounter.`

#### Updating State with Hooks

Okay great, we have a variable holding the initial value of the state, and a
function that can update it. How do we use it? Normally it would involve
calling `setState`, but now we have a function that will directly update only
the one state variable it is linked to. So to use the `setCounter` function
from the previous example we could do something like this.

```javascript
setCounter(counter + 1)
```

We pass in the `counter` variable and add one to it to ensure the new value
will be one more than what `counter` was previously set to. We could pass in
any number to update the `counter` but it makes sense for the count to only
increase by one to do it this way.

`setCounter` and `counter` were both created by the same invocation of
`useState` and therefore we don't need to tell `setCounter` what it should be
updating.

#### Hooking into Lifecycle Methods

Having a functional component that can update its own state variable is game
changing for React developers. If that was all Hooks provided it would be
great, but you may be wondering about the typical Lifecycle methods that we can
access from class components. Methods such as `componentDidMount`,
`componentDidUpdate`, etc.

Hooks haven't forgotten about those either and have provided a single function
that we can use to tell React about other code that should be running during
those Lifecycle method calls. The function is called `useEffect`. Let's see an
example of doing it from a class component.

```javascript
componentDidMount () {
  axios(`${apiUrl}/movies/${this.props.match.params.id}`)
    .then(res => this.setState({ movie: res.data.movie }))
    .catch(console.error)
}
```

Here we are letting React know that when the component has been rendered to the
DOM, it should trigger this HTTP request for getting whichever movie we need to
see. Now we can see how to achieve this with `useEffect`.

```javascript
useEffect(() => {
  axios(`${apiUrl}/movies/${props.match.params.id}`)
    .then(res => setMovie(res.data.movie))
    .catch(console.error)
}, [])
```

As you can see it's not drastically different, but let's address all the
changes.

First, we are actually invoking `useEffect` which is slightly
different than how we handled `componentDidMount`. We get access to `useEffect`
by importing it directly from React, and then we invoke it ourselves and pass
in a callback function.

The callback function triggers the axios HTTP request which is mostly the same
except we don't need to use `this` anymore since we are no longer in a class
component. We can simply access the `props` themselves.

The callback for our `.then` has changed a bit too. Now we are using a
`setMovie` function instead of `setState`. Since `setMovie` is linked to a
specific state variable we can simply pass in the new value we got back from
the API.

The last change is a bit strange. After the callback function, we pass an
additional argument to `useEffect`, an empty array. Why would we need to pass
in an empty array? The answer is a little tricky.

Now that we are using one function to replace all the Lifecycle methods we
would normally use, it comes with a caveat. `useEffect` is invoked every time
the component renders, which means if you modify the component's state inside
of `useEffect` it will trigger a re-render, which will in turn invoke
`useEffect` again! Essentially an endless loop of calling itself.

Luckily `useEffect` accepts an array of dependencies as the second argument.
The array should contain any objects that you want `useEffect` to depend on. If
any of the objects in that array are changed, that is when it will invoke
`useEffect` again. If there is no array present, `useEffect` will call itself
forever. If the array is empty, `useEffect` will only be called after the first
render of the component. Just what we need in this case.

## Additional Resources

- [React Docs for Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Hooks and Forms](https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57)
- [What exactly is useState?](https://stackoverflow.com/questions/53165945/what-is-usestate-in-react)
- [Why does my http request keep happening from useEffect?](https://www.andreasreiterer.at/react-useeffect-hook-loop/)
- [History of React and how it got to Hooks](https://itnext.io/why-reacts-hooks-api-is-a-game-changer-8731c2b0a8c)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

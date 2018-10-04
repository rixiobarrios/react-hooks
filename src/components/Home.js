import React from 'react';
import Nav from './shared/Nav'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit ex, posuere at nibh eget, pharetra facilisis felis. Praesent feugiat rhoncus orci, non maximus ante tincidunt nec. Nam et justo leo. Nam ac lectus aliquet, blandit leo id, porttitor nibh. Pellentesque elementum purus eget neque elementum porttitor. Suspendisse potenti. Praesent fringilla ligula ac dolor viverra, eleifend commodo eros pretium. Donec odio dui, vestibulum eget leo quis, bibendum tempus tortor. Pellentesque sit amet mattis arcu, eget semper enim.</p>
      </React.Fragment>
    )
  }
}

export default Home

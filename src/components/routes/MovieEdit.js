import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import MovieForm from '../shared/MovieForm'
import Layout from '../shared/Layout'

class MovieEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movie: {
        title: '',
        director: '',
        year: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/movies/${this.props.match.params.id}`)
      .then(res => this.setState({ movie: res.data.movie }))
      .catch(console.error)
  }
  /*
  Async/Await version:
  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/movies/${this.props.match.params.id}`)
      this.setState({ movie: response.data.movie })
    } catch (err) {
      console.error(err)
    }
  }
  */

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedMovie = Object.assign(this.state.movie, updatedField)

    this.setState({ movie: editedMovie })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/movies/${this.props.match.params.id}`,
      method: 'PATCH',
      data: { movie: this.state.movie }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }
  /*
  async handleSubmit = event => {
    event.preventDefault()

    try {
      const response = await axios({
        url: `${apiUrl}/movies/${this.props.match.params.id}`,
        method: 'PATCH',
        data: { movie: this.state.movie }
      })
      this.setState({ updated: true })
    } catch (err) {
      console.error(err)
    }
  }
  */

  render () {
    const { movie, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/movies/${this.props.match.params.id}`} />
    }

    return (
      <Layout>
        <MovieForm
          movie={movie}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/movies/${this.props.match.params.id}`}
        />
      </Layout>
    )
  }
}

export default MovieEdit

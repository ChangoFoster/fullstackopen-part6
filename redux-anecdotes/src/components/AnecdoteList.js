import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { newNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = (props) => {

  const addVote = (anecdote) => () => {
    props.vote(anecdote)
    props.newNotification(`You voted for ${anecdote.content}`, 5000)
  }

  return (
    <div>
      {props.anecdotes.map(anecdote =>
        <Anecdote
          key= {anecdote.id}
          anecdote={anecdote}
          handleClick={addVote(anecdote)}/>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
      .filter(({content}) => state.filter === null
        ? content : content.toLowerCase().indexOf(state.filter) >= 0)
      .sort((prev, curr) => curr.votes - prev.votes)
  }
}

const mapDispatchToProps = {
  vote, newNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList

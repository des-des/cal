import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from '../shared/Button'
import NoEvents from './NoEvents'
import Event from './Event'

class Events extends Component {
  render() {
    const { events } = this.props

    console.log({ events });

    if (events.length === 0) return <NoEvents />

    return (
      <div>
        { events.map(event => <Event {...event} />) }
        <div className='w-100 tc'>
          <Link to='/new-event' className='link black dib'>
            <Button className=''>
              Create new event
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Events

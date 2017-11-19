import React, { Component } from 'react'

import TextInput from '../shared/TextInput'
import Button from '../shared/Button'

class NameDescriptionForm extends Component {
  render() {
    const {
      match,
      onChange,
      location
    } = this.props
    const isEmpty = typeof location === 'undefined' || location === ''

    return (
      <div>
        <div className='w-100 pa4 tc f4 lh-copy'>
          Add your event location
        </div>,
        <TextInput
          name='location'
          label='Location'
          onChange={onChange}
          value={location}
        />,
        <Button
          link={`${match.url}/tickets`}
          className='tc absolute w-100 bottom-0'
        >
          {isEmpty ? 'Skip' : 'Next'}
        </Button>
      </div>
    )
  }
}

export default NameDescriptionForm
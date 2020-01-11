import React, { Component } from 'react'
import { Base, BaseHeader, BaseBody, BaseFooter } from 'react-base-element'

export default class App extends Component {
  render () {
    return (
      <div>
        <Base>
          <BaseHeader>
            Header
          </BaseHeader>
          <BaseBody>
            Body
          </BaseBody>
          <BaseFooter>
            Footer
          </BaseFooter>
        </Base>
      </div>
    )
  }
}

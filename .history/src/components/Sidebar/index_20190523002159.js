import React, { Component } from 'react'

export default class Sidebar extends Component {
  
  state = {
    modules: 
  }

  render() {

    const { modules } = this.state
    return (
      <aside>
        { modules.map(module => (
          <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              { module.lessons.map(lessons => (
                <li key={lessons.id}>{lessons.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    )
  }
}

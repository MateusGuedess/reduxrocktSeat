import React, { Component } from 'react'

export default class Sidebar extends Component {
  
  state = {
    modules: [
      {
        id: 1, 
        title: 'iniciando com react', 
        lessons: [
          { id: 1, title: 'primeira aula' } 
          { id: 1, title: 'segunda aula' }
        ]
      }
    ]
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

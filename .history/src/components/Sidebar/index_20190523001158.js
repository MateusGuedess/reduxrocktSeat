import React, { Component } from 'react'

export default class Sidebar extends Component {
  
  state = {
    modules: [
      {
        id: 1, 
        title: 'iniciando com react', 
        lessons: [
          { id: 1, title: 'primeira aula' },
          { id: 2, title: 'segunda aula' }
        ]
      },
      {
        id: 2,
        title: 'aprendendo redux',
        lessons:[
          {id: 3, title: 'terceira aula'},
          {id: 4, title: 'quarta aula'}
        ]
      }
    ]
  }

  render() {

    const { modules } = this.state
    return (
      <aside>
        { modules.map(module => {
          <div key={module.id}>
            <strong>{module.title}</strong>
          </div>
        })}
      </aside>
    )
  }
}

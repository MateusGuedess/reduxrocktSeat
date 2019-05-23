import { createStore } from 'redux'

const INITIAL_STATE = {
  activeLesson: null,
  activeModule: null,
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

function reducer(state = INITIAL_STATE, action) {
  console.log('teste')
  return state
}


const store = createStore(reducer)

export default store
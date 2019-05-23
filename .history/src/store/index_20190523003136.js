import { createStore } from 'redux'

function reducer() {
  return [
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


const store = createStore(reducer)

export default store
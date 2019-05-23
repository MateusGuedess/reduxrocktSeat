import { createStore } from 'redux'

function reducer() {
  return {
  activeLesson: null,
  activeModule: null,
  modules: [
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
  ]}
}


const store = createStore()

export default store
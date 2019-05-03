const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.payload.name,
          protocol: action.payload.protocol,
          port: action.payload.port,
          rule: action.payload.rule,
          status: action.payload.status,
          groups: action.payload.groups
        }
      ]
    case 'SORT_TODO':
      const sortByKey = key => (a, b) => a[key] > b[key]
      return state.sort(sortByKey('name'))
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default todos
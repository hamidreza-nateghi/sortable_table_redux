let nextTodoId = 0;  // not a good idea to keep it here! keep it in your redux store!
// secondly, generate a random ID! Math.floor(Math.random() * 1000)
export const addTodo = payload => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  payload
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

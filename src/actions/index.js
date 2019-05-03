let nextTodoId = 0;
export const addTodo = payload => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  payload
});

export const sortTodo = () => ({
  type: 'SORT_TODO'
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
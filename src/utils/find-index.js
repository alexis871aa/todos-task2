export const findIndex = (todos, searchId) =>
	todos.findIndex((todo) => todo.id === String(searchId));

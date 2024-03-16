export const findDoubleTask = (todos, searchTask) =>
	todos.some((todo) => todo.text === searchTask);

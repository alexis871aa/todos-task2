export const requestChangeChecked = (target, refreshTodos, todos) => {
	const targetIndex = todos.findIndex((todo) => todo.id === target.id);

	fetch(`http://localhost:3000/todos/${target.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			id: target.id,
			completed: !todos.at(targetIndex).completed,
			text: todos.find((todo) => todo.id === target.id).text,
		}),
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) =>
			console.log('Статус задачи изменён, ответ сервера: ', response),
		)
		.finally(() => refreshTodos());
};

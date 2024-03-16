import { findIndex } from '../utils/index.js';
import { TODOS } from '../const/path.js';

export const requestChangeChecked = (target, refreshTodos, todos) => {
	const targetIndex = findIndex(todos, target.id);

	fetch(`${TODOS}/${target.id}`, {
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

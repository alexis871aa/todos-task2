import { useState } from 'react';

export const useRequestAddTask = (refreshTodos, inputRef) => {
	const [isCreating, setIsCreating] = useState(false);
	const handleSubmit = (event) => {
		event.preventDefault();
		setIsCreating(true);
		fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				id: String(Date.now()),
				completed: false,
				text: inputRef.current.value,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача добавлена, ответ сервера: ', response);
				refreshTodos();
			})
			.finally(() => setIsCreating(false))
	}

	return {
		isCreating,
		handleSubmit,
	}
}

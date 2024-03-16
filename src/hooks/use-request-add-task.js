import { useState } from 'react';
import { validator } from '../utils/index.js';
import { TODOS } from '../const/path.js';

export const useRequestAddTask = (refreshTodos, inputRef, todos) => {
	const [isCreating, setIsCreating] = useState(false);
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const [isError, setIsError] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsCreating(true);
		const { message, key } = validator(value, todos);
		if (key === 1) {
			setValue('');
		}

		if (key === 0) {
			setIsError(false);
			fetch(TODOS, {
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
				.finally(() => setIsCreating(false));
		} else {
			setIsError(true);
		}
		setError(message);
	};

	const handleChangeValue = ({ target }) => {
		setValue(target.value);
		setIsError(false);
		setError('');
	};

	return {
		isCreating,
		value,
		error,
		isError,
		setError,
		setValue,
		handleSubmit,
		handleChangeValue,
	};
};

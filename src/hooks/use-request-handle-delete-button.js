import { useState } from 'react';
import { TODOS } from '../const/path.js';

export const useRequestHandleDeleteButton = (refreshTodos, todos, setError, setValue) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const handleDeleteButton = ({ target }) => {
		setIsDeleting(true);
		fetch(`${TODOS}/${target.id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => console.log('Задача удалена, ответ сервера: ', response))
			.finally(() => {
				setIsDeleting(false);
				setError('');
				setValue('');
				refreshTodos();
			});
	};
	return {
		isDeleting,
		handleDeleteButton,
	};
};

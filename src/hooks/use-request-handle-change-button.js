import { useState } from 'react';
import { findIndex, validator } from '../utils/index.js';
import { TODOS } from '../const/path.js';

export const useRequestHandleChangeButton = (refreshTodos, todos) => {
	const [isChanging, setIsChanging] = useState(false);

	const handleChangeButton = ({ target }) => {
		setIsChanging(true);
		const targetIndex = findIndex(todos, target.id);
		const changedValue = prompt('Измените задачу: ', `${todos.at(targetIndex).text}`);
		if (!changedValue) {
			console.log('Задача не изменена, нажата отмена!');
			setIsChanging(false);
		} else {
			const { message, key } = validator(changedValue, todos);
			if (key === 0) {
				fetch(`${TODOS}/${target.id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
					},
					body: JSON.stringify({
						id: target.id,
						completed: todos.at(targetIndex).completed,
						text: changedValue,
					}),
				})
					.then((rawResponse) => rawResponse.json())
					.then((response) =>
						console.log(
							'Задача была успешно изменена, ответ сервера:',
							response,
						),
					)
					.finally(() => {
						setIsChanging(false);
						refreshTodos();
					});
			} else {
				console.error('message', message);
				setIsChanging(false);
			}
		}
	};

	return {
		isChanging,
		handleChangeButton,
	};
};

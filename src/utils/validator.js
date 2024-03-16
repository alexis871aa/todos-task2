import { findDoubleTask } from './find-double-task.js';

export const validator = (value, todos = []) => {
	let message = '';
	let key = 0;
	if (value === null) {
		return {
			message: 'Пустое значение',
			key: -1,
		};
	}
	if (findDoubleTask(todos, value)) {
		message = 'Такая задача существует, введите еще раз';
		key = 1;
	}
	if (value.length <= 5) {
		message =
			'Вы ввели меньше 5 символов, задача должна содержать больше 5 символов, введите еще раз';
		key = 5;
	}
	if (value.length > 50) {
		message =
			'Вы ввели больше 50 символов, задача должна содержать меньшее количество символов, введите еще раз';
		key = 50;
	}

	return {
		message,
		key,
	};
};

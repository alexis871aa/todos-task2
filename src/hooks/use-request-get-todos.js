import { useEffect, useState } from 'react';
import { TODOS, SORT_BY_TEXT } from '../const/path.js';

export const useRequestGetTodos = (refreshTodosFlag, isPressing) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isSorting, setIsSorting] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setIsSorting(true);
		let request = isPressing ? `${TODOS}${SORT_BY_TEXT}` : TODOS;

		fetch(request)
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos) || [])
			.finally(() => {
				setIsLoading(false);
				setIsSorting(false);
			});
	}, [refreshTodosFlag, isPressing]);

	return {
		todos,
		setTodos,
		isLoading,
		isSorting,
	};
};

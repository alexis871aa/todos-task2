import { useState } from 'react';
import { TODOS, SEARCH, SORT_BY_TEXT } from '../const/path.js';
import { debounce } from 'lodash';

export const useRequestSearchTask = (setTodos, isPressing) => {
	const [searchValue, setSearchValue] = useState('');
	const [isSearching, setIsSearching] = useState(false);

	const requestSearch = debounce((search) => {
		setIsSearching(true);
		if (search === undefined) {
			return;
		}
		const request =
			search !== ''
				? `${TODOS}${SEARCH}${search}`
				: isPressing
					? `${TODOS}${SORT_BY_TEXT}`
					: TODOS;
		fetch(request)
			.then((loadedData) => loadedData.json())
			.then((loadedSearchTodos) => setTodos(loadedSearchTodos) || [])
			.finally(() => {
				setIsSearching(false);
			});
	}, 700);

	const searchChangeValue = ({ target }) => {
		setSearchValue(target.value);
		requestSearch(target.value);
	};

	return {
		searchValue,
		isSearching,
		searchChangeValue,
	};
};

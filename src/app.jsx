import {
	useRequestGetTodos,
	useRequestAddTask,
	useRequestHandleDeleteButton,
	useRequestHandleChangeButton,
	requestChangeChecked,
	useRequestSearchTask,
} from './hooks/index.js';
import { AppLayout } from './app-layout.jsx';
import { useRef, useState } from 'react';

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [isPressing, setIsPressing] = useState(false);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);
	const inputRef = useRef(null);

	const { todos, setTodos, isLoading, isSorting } = useRequestGetTodos(
		refreshTodosFlag,
		isPressing,
	);

	const { searchValue, isSearching, searchChangeValue } = useRequestSearchTask(
		setTodos,
		isPressing,
	);

	const {
		isCreating,
		value,
		error,
		isError,
		setError,
		setValue,
		handleSubmit,
		handleChangeValue,
	} = useRequestAddTask(refreshTodos, inputRef, todos);

	const { isDeleting, handleDeleteButton } = useRequestHandleDeleteButton(
		refreshTodos,
		todos,
		setError,
		setValue,
	);

	const { isChanging, handleChangeButton } = useRequestHandleChangeButton(
		refreshTodos,
		todos,
	);

	return (
		<AppLayout
			todos={todos}
			isLoading={isLoading}
			isSorting={isSorting}
			isPressing={isPressing}
			setIsPressing={setIsPressing}
			inputRef={inputRef}
			isCreating={isCreating}
			handleSubmit={handleSubmit}
			isDeleting={isDeleting}
			handleDeleteButton={handleDeleteButton}
			isChanging={isChanging}
			handleChangeButton={handleChangeButton}
			value={value}
			handleChangeValue={handleChangeValue}
			handleOnChangeChecked={({ target }) =>
				requestChangeChecked(target, refreshTodos, todos)
			}
			refreshTodos={refreshTodos}
			error={error}
			isError={isError}
			setError={setError}
			searchChangeValue={searchChangeValue}
			searchValue={searchValue}
			isSearching={isSearching}
		/>
	);
};

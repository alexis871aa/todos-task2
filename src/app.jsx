import {
	useRequestGetTodos,
	useRequestAddTask,
	useRequestHandleDeleteButton,
	useRequestHandleChangeButton,
	requestChangeChecked,
	useRequestSearchTask,
} from './hooks/index.js';
import { AppLayout } from './app-layout.jsx';
import { ErrorPage, TaskPage } from './components';
import { useRef, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [isPressing, setIsPressing] = useState(false);
	const navigate = useNavigate();

	const handleTask = ({ target }) => {
		navigate(`/task/${target.id}`);
	};

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
		navigate,
	);

	const { isChanging, handleChangeButton } = useRequestHandleChangeButton(
		refreshTodos,
		todos,
	);

	const props = {
		todos,
		value,
		error,
		inputRef,
		searchValue,
		isError,
		isCreating,
		isPressing,
		setIsPressing,
		handleSubmit,
		handleChangeValue,
		searchChangeValue,
		isLoading,
		isSorting,
		handleTask,
		refreshTodos,
		setError,
		isSearching,
		isChanging,
		isDeleting,
		handleOnChangeChecked: ({ target }) =>
			requestChangeChecked(target, refreshTodos, todos),
		handleChangeButton,
		handleDeleteButton,
	};

	return (
		<Routes>
			<Route path="/" element={<AppLayout {...props} />}></Route>
			<Route path="/task/:id" element={<TaskPage {...props} />}></Route>
			<Route path="/404" element={<ErrorPage />} />
			<Route path="*" element={<Navigate to="/404" replace={true} />} />
		</Routes>
	);
};

import styles from './create-task-layout.module.css';
import { Error } from '../Error/error.jsx';
import { SortButton } from '../SortButton/sort-button.jsx';

export const CreateTaskLayout = (props) => {
	return (
		<form className={styles.formCreateTask} onSubmit={props.handleSubmit}>
			<input
				name="taskName"
				className={styles.inputCreateTask}
				type="text"
				placeholder="Создайте новую задачу"
				value={props.value}
				ref={props.inputRef}
				onChange={props.handleChangeValue}
			/>
			<button
				type="submit"
				className={styles.inputCreateTaskButton}
				disabled={props.isError && props.isCreating}
			>
				Создать
			</button>
			<SortButton {...props} />
			<Error {...props} />
		</form>
	);
};

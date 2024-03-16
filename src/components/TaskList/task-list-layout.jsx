import styles from '../TaskList/task-list-layout.module.css';
import { Loader } from '../Loader/loader.jsx';

export const TaskListLayout = (props) => {
	return (
		<>
			{props.isLoading ? (
				<Loader />
			) : (
				props.todos.map((todo) => {
					return (
						<div key={todo.id} className={styles.taskItem}>
							<div className={styles.mainContainer}>
								<div className={styles.mainContent}>
									<form>
										<input
											className={styles.checkboxFormCheckbox}
											type="checkbox"
											id={todo.id}
											checked={todo.completed}
											onChange={props.handleOnChangeChecked}
										/>
										<label htmlFor={todo.id}></label>
									</form>
									<span className={styles.taskItemText}>
										{todo.text}
									</span>
								</div>
								<button
									className={styles.changeButton}
									id={todo.id}
									onClick={props.handleChangeButton}
									disabled={props.isChanging}
								>
									Изменить
								</button>
								<button
									className={styles.deleteButton}
									id={todo.id}
									onClick={props.handleDeleteButton}
									disabled={props.isDeleting}
								>
									Удалить
								</button>
							</div>
						</div>
					);
				})
			)}
		</>
	);
};

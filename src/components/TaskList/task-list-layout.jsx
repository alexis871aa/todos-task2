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
									<span
										className={styles.taskItemText}
										id={todo.id}
										onClick={props.handleTask}
									>
										{todo.text.length <= 35
											? todo.text
											: todo.text.substring(0, 35) + '...'}
									</span>
								</div>
							</div>
						</div>
					);
				})
			)}
		</>
	);
};

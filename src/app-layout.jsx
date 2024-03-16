import styles from './app.module.css';
import { TaskList, CreateTask, TextInfo, SearchTask } from './components/index.js';

export const AppLayout = (props) => {
	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<CreateTask {...props} />
				<SearchTask {...props} />
				{props.todos.length === 0 ? (
					<TextInfo {...props} />
				) : (
					<TaskList {...props} />
				)}
			</div>
		</div>
	);
};

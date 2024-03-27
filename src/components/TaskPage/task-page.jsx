import { useParams, useNavigate } from 'react-router-dom';
import { findIndex } from '../../utils/index.js';
import { ErrorFindTaskPage } from '../ErrorFindTaskPage/error-find-task-page.jsx';
import styles from './task-page.module.css';

export const TaskPage = ({
	todos,
	isChanging,
	isDeleting,
	handleOnChangeChecked,
	handleChangeButton,
	handleDeleteButton,
}) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const taskIndex = findIndex(todos, id);

	if (taskIndex === -1) {
		return <ErrorFindTaskPage />;
	}

	const { completed, text } = todos.at(taskIndex);

	const handleBackButton = () => {
		navigate(-1);
	};

	return (
		<div className={styles.taskItem}>
			<div className={styles.mainContainer}>
				<div className={styles.mainContent}>
					<form>
						<input
							className={styles.checkboxFormCheckbox}
							type="checkbox"
							id={id}
							checked={completed}
							onChange={handleOnChangeChecked}
						/>
						<label htmlFor={id}></label>
					</form>
					<span className={styles.taskItemText} id={id}>
						{text}
					</span>
				</div>
				<button className={styles.backButton} id={id} onClick={handleBackButton}>
					Назад
				</button>
				<button
					className={styles.changeButton}
					id={id}
					onClick={handleChangeButton}
					disabled={isChanging}
				>
					Изменить
				</button>
				<button
					className={styles.deleteButton}
					id={id}
					onClick={handleDeleteButton}
					disabled={isDeleting}
				>
					Удалить
				</button>
			</div>
		</div>
	);
};

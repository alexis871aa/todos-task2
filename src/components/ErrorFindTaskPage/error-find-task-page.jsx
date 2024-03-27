import styles from './error-find-task-page.module.css';
import { NavLink } from 'react-router-dom';

export const ErrorFindTaskPage = () => {
	return (
		<div>
			<div className={styles.error}>Ошибка! Задача не найдена</div>
			<div className={styles.main}>
				<NavLink to="/">На главную</NavLink>
			</div>
		</div>
	);
};

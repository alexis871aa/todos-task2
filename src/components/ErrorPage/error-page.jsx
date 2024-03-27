import styles from './error-page.module.css';
import { NavLink } from 'react-router-dom';

export const ErrorPage = () => {
	return (
		<div>
			<div className={styles.error}>
				Ошибка! Страница не найдена или не существует
			</div>
			<div className={styles.main}>
				<NavLink to="/">На главную</NavLink>
			</div>
		</div>
	);
};

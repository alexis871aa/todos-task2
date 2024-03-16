import styles from './search-task.module.css';

export const SearchTaskLayout = (props) => {
	return (
		<form className={styles.formSearchTask}>
			<input
				name="searchName"
				className={styles.inputSearchTask}
				type="text"
				placeholder="Введите для поиска задачи"
				value={props.searchValue}
				onChange={props.searchChangeValue}
			/>
		</form>
	);
};

import styles from './sort-button.module.css';

export const SortButton = (props) => {
	const handleClick = () => {
		props.setIsPressing(!props.isPressing);
	};

	return (
		<>
			<input type="checkbox" id="checkbox" className={styles.checkbox} />
			<label
				htmlFor="checkbox"
				onClick={handleClick}
				className={
					props.isSorting
						? `${styles.sortTaskButtonDisabled}`
						: `${styles.sortTaskButton}`
				}
			>
				{!props.isPressing ? 'Сортировать' : 'Не сортировать'}
			</label>
		</>
	);
};

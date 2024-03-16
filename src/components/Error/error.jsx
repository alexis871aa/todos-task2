import styles from './error.module.css';

export const Error = (props) => {
	return <div className={styles.error}>{props.error}</div>;
};

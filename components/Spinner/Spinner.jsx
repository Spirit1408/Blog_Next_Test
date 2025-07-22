import styles from './Spinner.module.css';

export default function Spinner({ text = "Loading..." }) {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

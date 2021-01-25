import styles from "./Board.module.css";
export default function Post(props) {
  return (
    <div className={styles.postWrapper}>
      <div className={styles.postTitle}>{props.title}</div>
      <div className={styles.postExcerpt}>{props.excerpt}</div>
    </div>
  );
}

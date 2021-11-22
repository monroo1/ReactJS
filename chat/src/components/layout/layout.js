import { layoutStyles } from "./use-styles.js";

export function Layout({ chats, messages }) {
  const styles = layoutStyles();
  return (
    <div className={styles.wrapper}>
      <div className={styles.chats}>{chats}</div>
      <div className={styles.messages}>{messages}</div>
    </div>
  );
}

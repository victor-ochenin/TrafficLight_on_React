import styles from "./page.module.css";

import TrafficLight from "./сomponent/index";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <h1>React traffic light</h1>
      </header>
      <main className={styles.main}>
        <h2>Traffic light</h2>
        <TrafficLight />
      </main>
      <footer className={styles.footer}>
        <h4>Example created by V.A. Ochenin.</h4>
      </footer>
    </div>
  );
}

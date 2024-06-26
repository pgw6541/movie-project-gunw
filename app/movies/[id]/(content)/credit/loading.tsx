import styles from "@/styles/loading/loading-content.module.scss";

export default function Loading() {
  const creditsLength = new Array(20).fill(0);
  return (
    <section className={styles.skeleton_credits}>
      <h2>CAST</h2>
      <ul>
        {creditsLength.map((el, index) => (
          <li key={index}>
            <figure></figure>
            <article>
              <p className={styles.skeleton_name}></p>
              <p className={styles.skeleton_character}></p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
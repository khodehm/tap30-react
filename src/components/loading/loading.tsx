import styles from "./loading.module.scss"
export const Loading = () => {
  return (
    <section className="flex justify-center items-center h-screen w-screen">
      <div className={styles.loader}>
      </div>


    </section>
  );
};

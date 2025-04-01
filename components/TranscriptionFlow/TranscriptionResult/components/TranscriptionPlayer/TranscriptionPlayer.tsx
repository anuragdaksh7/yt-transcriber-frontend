import styles from "./TranscriptionPlayer.module.scss";

type Props = {}

const TranscriptionPlayer = (props: Props) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.video}></div>
    </div>
  )
}

export default TranscriptionPlayer
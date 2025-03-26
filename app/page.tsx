import TranscriptionOne from "@/components/TranscriptionOne/TranscriptionOne"
import styles from "./page.module.scss"

export default function Home() {
  return (
    <div className={styles.main_container}>
      <TranscriptionOne />
    </div>
  )
}
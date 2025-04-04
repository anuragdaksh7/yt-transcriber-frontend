import TranscriptionField from "./components/TranscriptionField/TranscriptionField"
import TranscriptionKeywords from "./components/TranscriptionKeywords/TranscriptionKeywords"
import TranscriptionPlayer from "./components/TranscriptionPlayer/TranscriptionPlayer"
import TranscriptionResultNavbar from "./components/TranscriptionResultNavbar/TranscriptionResultNavbar"
import TranscriptionSummary from "./components/TranscriptionSummary/TranscriptionSummary"

import styles from "./TranscriptionResult.module.scss"

const TranscriptionResult = () => {
  return (
    <div className={styles.main_container}>
      <TranscriptionResultNavbar
        name="Anurag Daksh"
        title="How to build $3000 saas and make it profitable?"
        views="140"
      />
      <div className={styles.content}>
        <div className={styles.col1}>
          <TranscriptionPlayer />
          <TranscriptionField />
        </div>
        <div className={styles.col1}>
          <TranscriptionSummary />
          <TranscriptionKeywords />
        </div>
      </div>
    </div>
  )
}

export default TranscriptionResult
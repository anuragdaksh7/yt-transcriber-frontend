import Sparkle from "@/images/sparkle.svg"
import styles from "./TranscriptionSummary.module.scss"
import Image from "next/image"

const TranscriptionSummary = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <Image src={Sparkle} width={16} alt="AI"/>
        <p>Summary</p>
        <div>
          <p>AI</p>
        </div>
      </div>
      {
        // TBD: @shivansh aggrawal
      }
    </div>
  )
}

export default TranscriptionSummary
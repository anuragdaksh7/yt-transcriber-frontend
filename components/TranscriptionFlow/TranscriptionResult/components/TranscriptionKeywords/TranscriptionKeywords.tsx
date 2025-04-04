import Sparkle from "@/images/sparkle.svg"
import Image from "next/image"
import styles from "./TranscriptionKeywords.module.scss"

const TranscriptionKeywords = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <Image src={Sparkle} width={16} alt="AI"/>
        <p className={styles.title}>SEO Keywords</p>
        <div className={styles.ai}>
          <p>AI</p>
        </div>
      </div>
    </div>
  )
}

export default TranscriptionKeywords
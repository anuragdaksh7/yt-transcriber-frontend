import Image from "next/image"
import ytSoundImage from "@/images/yt-sound-image.png"
import styles from "./TranscriptionOAuth.module.scss"
import OutlineButton from "@/ui/Buttons/OutlineButton/OutlineButton"
import GoogleIcon from "@/images/google-icon.svg"

const TranscriptionOAuth = () => {
  return (
    <div className={styles.main_container}>
      <Image src={ytSoundImage} alt="Yt-Sound" priority={true} quality={100} width={138} />
      <h1>🔎 Instant Transcription – Sign in with Google to Begin</h1>
      <OutlineButton>
        <Image src={GoogleIcon} quality={100} alt="google" width={24} />
        <p>Continue with google</p>
      </OutlineButton>
    </div>
  )
}

export default TranscriptionOAuth
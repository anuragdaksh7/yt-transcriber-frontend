import Image from "next/image"
import styles from "./TranscriptionOne.module.scss"
import GradientButton from "@/ui/Buttons/GradientButton/GradientButton"
import SimpleInput from "@/ui/Inputs/SimpleInput/SimpleInput"
import ytSoundImage from "@/images/yt-sound-image.png"

// type Props = {}

const TranscriptionOne = (
  // props: Props
) => {
  return (
    <div className={styles.main_container}>
      <Image src={ytSoundImage} alt="Yt-Sound" priority={true} quality={100} width={138} />
      <div className={styles.text_container}>
        <h1>Transcribe your recording</h1>
        <p>Generate a transcript using our cutting-edge, AI transcription tech.</p>
      </div>
      <SimpleInput type="text" placeholder="youtu.be/xxxx" />
      <GradientButton text="Transcribe" />
    </div>
  )
}

export default TranscriptionOne
import Image from "next/image"
import styles from "./TranscriptionOne.module.scss"
import GradientButton from "@/ui/Buttons/GradientButton/GradientButton"
import SimpleInput from "@/ui/Inputs/SimpleInput/SimpleInput"
import ytSoundImage from "@/images/yt-sound-image.png"
import { useAppDispatch } from "@/lib/hooks"
import { setCurrentPage } from "@/lib/features/currentDialog/currentDialogSlice"
import { transcriberFlowState } from "@/contants/transcriberFlowState"

const TranscriptionOne = (
) => {
  const dispatch = useAppDispatch()

  const onTranscribeCall = () => {
    console.log("alksdfkaj")
    dispatch(setCurrentPage(transcriberFlowState.OAUTH))
  }
  return (
    <div className={styles.main_container}>
      <Image src={ytSoundImage} alt="Yt-Sound" priority={true} quality={100} width={138} />
      <div className={styles.text_container}>
        <h1>Transcribe your recording</h1>
        <p>Generate a transcript using our cutting-edge, AI transcription tech.</p>
      </div>
      <SimpleInput type="text" placeholder="youtu.be/xxxx" />
      <GradientButton onClick={onTranscribeCall} text="Transcribe" />
    </div>
  )
}

export default TranscriptionOne
import Image from "next/image"
import ytSoundImage from "@/images/yt-sound-image.png"
import styles from "./TranscriptionOAuth.module.scss"
import OutlineButton from "@/ui/Buttons/OutlineButton/OutlineButton"
import GoogleIcon from "@/images/google-icon.svg"
import { useAppDispatch } from "@/lib/hooks"
import { setCurrentPage } from "@/lib/features/currentDialog/currentDialogSlice"
import { transcriberFlowState } from "@/contants/transcriberFlowState"
import { axios_instance } from "@/utils/axios_instance"

const TranscriptionOAuth = () => {
  const dispatch = useAppDispatch();

  const getRedir = async () => {
    const response = await axios_instance.get("/oauth/google/redirect-uri")
    console.log(response.data)
    window.open(response.data.data, "_blank")
  }

  const onAuth = () => {
    getRedir()
    dispatch(setCurrentPage(transcriberFlowState.RESULT))
  }
  return (
    <div className={styles.main_container}>
      <Image src={ytSoundImage} alt="Yt-Sound" priority={true} quality={100} width={138} />
      <h1>🔎 Instant Transcription – Sign in with Google to Begin</h1>
      <OutlineButton onClick={onAuth}>
        <Image src={GoogleIcon} quality={100} alt="google" width={24} />
        <p>Continue with google</p>
      </OutlineButton>
    </div>
  )
}

export default TranscriptionOAuth
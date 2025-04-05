import Image from "next/image"

import { useAppDispatch } from "@/lib/hooks"
import { transcriberFlowState } from "@/contants/transcriberFlowState"
import { setCurrentPage } from "@/lib/features/currentDialog/currentDialogSlice"

import { axios_instance } from "@/utils/axios_instance"

import OutlineButton from "@/ui/Buttons/OutlineButton/OutlineButton"

import GoogleIcon from "@/images/google-icon.svg"
import ytSoundImage from "@/images/yt-sound-image.png"

import styles from "./TranscriptionOAuth.module.scss"

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
import Image from "next/image"

import { useAppSelector } from "@/lib/hooks"
import { selectSummary } from "@/lib/features/summary/summarySlice"

import GhostButton from "@/ui/Buttons/GhostButton/GhostButton"
import GradientButton from "@/ui/Buttons/GradientButton/GradientButton"

import profileCircle from "@/images/profile-circle.svg"
import eye from "@/images/eye.svg"

import styles from "./TranscriptionResultNavbar.module.scss"

const TranscriptionResultNavbar = () => {
  const youtubeUser = useAppSelector(selectSummary).youtubeUser
  return (
    <div className={styles.navbar}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>{youtubeUser?.name}</h2>
        <div className={styles.info_container}>
          <div className={styles.info}>
            <Image width={14} height={14} src={profileCircle} alt="profile" />
            <p>{youtubeUser?.user?.first_name}</p>
          </div>
          <div className={styles.info}>
            <Image width={14} height={14} src={eye} alt="views" />
            <p>{youtubeUser?.views} Views</p>
          </div>
        </div>
      </div>
      <div className={styles.action_container}>
        <GhostButton>
          <p>Share</p>
        </GhostButton>
        <GradientButton text="Download" noShadow={true} onClick={() => {}} />
      </div>
    </div>
  )
}

export default TranscriptionResultNavbar
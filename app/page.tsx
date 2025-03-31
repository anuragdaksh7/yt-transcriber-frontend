"use client"
import styles from "./page.module.scss"
import { useAppSelector } from "@/lib/hooks"
import { selectCurrentDialogPage } from "@/lib/features/currentDialog/currentDialogSlice";
import TranscriptionOAuth from "@/components/TranscriptionFlow/TranscriptionOAuth/TranscriptionOAuth";
import TranscriptionOne from "@/components/TranscriptionFlow/TranscriptionOne/TranscriptionOne";
import TranscriptionResult from "@/components/TranscriptionFlow/TranscriptionResult/TranscriptionResult";
import { useState } from "react";

export default function Home() {
  const currentPage = useAppSelector((state) => selectCurrentDialogPage(state));
  const [youtubeLink, setYoutubeLink] = useState("")
  return (
    <div className={styles.main_container}>
      {
        currentPage == "OAUTH" && <TranscriptionOAuth />
      }
      {
        currentPage == "LINK_SELECTION" && <TranscriptionOne youtubeLink={youtubeLink} setYoutubeLink={setYoutubeLink} />
      }
      {
        currentPage == "RESULT" && <TranscriptionResult />
      }
      {/* {
        <TranscriptionOAuth />
      } */}
    </div>
  )
}
"use client"
import styles from "./page.module.scss"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { transcriberFlowStateObject } from "@/contants/transcriberFlowState";
import { selectCurrentDialogPage } from "@/lib/features/currentDialog/currentDialogSlice";

export default function Home() {
  const currentPage = useAppSelector((state) => selectCurrentDialogPage(state));
  return (
    <div className={styles.main_container}>
      {
        transcriberFlowStateObject[currentPage]({})
      }
    </div>
  )
}
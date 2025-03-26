"use client"
import styles from "./page.module.scss"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { transcriberFlowStateObject } from "@/contants/transcriberFlowState";

export default function Home() {
  const currentPage = useAppSelector((state) => state.currentDialog.currentPage);
  return (
    <div className={styles.main_container}>
      {
        transcriberFlowStateObject[currentPage]({})
      }
    </div>
  )
}
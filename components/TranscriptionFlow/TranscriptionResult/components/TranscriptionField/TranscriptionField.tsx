import Image from "next/image"
import LanguageIcon from "@/images/language-circle.svg"
import Export from "@/images/export.svg"
import Profile2 from "@/images/Group.svg"
import styles from "./TranscriptionField.module.scss"

type Props = {}

const TranscriptionCell = ({ speaker, text, timestamp }: { speaker: string, text: string, timestamp: string }) => {
  return (
    <div className={styles.transcript_cell}>
      <div className={styles.cell_header}>
        <div className={styles.header_details}>
          <Image src={Profile2} width={14} alt="profile" />
          <p>{speaker}</p>
        </div>
        <div className={styles.export}>
          <Image src={Export} width={12} alt="export" />
        </div>
      </div>
      <div className={styles.main_content}>
        <p className={styles.text}>{text}</p>
        <div className={styles.timestamp}>
          <p>
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

const TranscriptionField = (props: Props) => {
  const transcript = [
    {
      "timestamp": "00:07",
      "speaker": "Narrator",
      "text": "The most valuable skill in modern entrepreneurship is recognizing patterns and gaps between what an API enables and what customers need."
    },
    {
      "timestamp": "00:37",
      "speaker": "Narrator",
      "text": "It's about leveraging other people's code to achieve the desired result for the user."
    },
    {
      "timestamp": "01:11",
      "speaker": "Narrator",
      "text": "An API is like trading Lego pieces to build a complete product. You pay a small fee to access code you couldn't build yourself."
    },
    {
      "timestamp": "02:08",
      "speaker": "Narrator",
      "text": "Customers only care that your SaaS delivers the desired result, not how it's built."
    },
    {
      "timestamp": "03:16",
      "speaker": "Narrator",
      "text": "Don't overcomplicate things. The goal is to build a system that survives long enough to matter and provide value to customers."
    },
    {
      "timestamp": "03:43",
      "speaker": "Narrator",
      "text": "Enhance tools by adding APIs like OpenAI to make them extraordinary."
    },
    {
      "timestamp": "05:07",
      "speaker": "Narrator",
      "text": "Combine APIs to create a workflow, such as scraping LinkedIn jobs, analyzing sentiment with AI, and generating a PDF report."
    },
    {
      "timestamp": "06:34",
      "speaker": "Narrator",
      "text": "Charge for the outcome of your software, not per API call."
    },
    {
      "timestamp": "07:13",
      "speaker": "Narrator",
      "text": "Treat APIs as a tax on progress, a small fee to avoid reinventing the wheel."
    },
    {
      "timestamp": "08:22",
      "speaker": "Narrator",
      "text": "If an API solves even 1% of your problem, use it."
    },
    {
      "timestamp": "11:01",
      "speaker": "Narrator",
      "text": "Combine Clearbit's API for social media data with Hunter.io's API for finding emails to create a lead generation tool."
    },
    {
      "timestamp": "13:01",
      "speaker": "Narrator",
      "text": "Platforms like Apify and RapidAPI offer various APIs that can be stitched together to create full-scale tools."
    },
    {
      "timestamp": "13:37",
      "speaker": "Narrator",
      "text": "Chaining APIs can compound costs, so be mindful of margins."
    },
    {
      "timestamp": "14:56",
      "speaker": "Narrator",
      "text": "Avoid vendor lock-in by having multiple vendors available."
    },
    {
      "timestamp": "15:34",
      "speaker": "Narrator",
      "text": "Differentiate through context to avoid margin erosion."
    },
    {
      "timestamp": "16:04",
      "speaker": "Narrator",
      "text": "Build a proprietary workflow around APIs to make your product unique and sticky."
    },
    {
      "timestamp": "17:36",
      "speaker": "Narrator",
      "text": "Sell outcomes, not APIs. Frame your product in terms of the value it provides to the customer."
    },
    {
      "timestamp": "19:22",
      "speaker": "Narrator",
      "text": "Find a dull problem in industries ripe for disruption."
    },
    {
      "timestamp": "19:31",
      "speaker": "Narrator",
      "text": "For every feature, ask if there's an API for it."
    },
    {
      "timestamp": "19:46",
      "speaker": "Narrator",
      "text": "Price for the outcome, not the API calls."
    },
    {
      "timestamp": "19:58",
      "speaker": "Narrator",
      "text": "Scale the \"glue\" by replacing costly APIs with in-house solutions as you grow."
    },
    {
      "timestamp": "20:45",
      "speaker": "Narrator",
      "text": "The next million-dollar idea will likely be built by a solo founder who strings together a few APIs and creates a user-friendly interface."
    }
  ].slice(0,5)

  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <div className={styles.details}>
          <Image src={LanguageIcon} width={16} alt="lang" />
          <p>Transcription</p>
        </div>
        <div className={styles.lang}>
          <p>English</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.4714 10.5147C8.21105 10.775 7.78894 10.775 7.52859 10.5147L4.19526 7.18137C3.93491 6.92102 3.93491 6.49891 4.19526 6.23856C4.45561 5.97821 4.87772 5.97821 5.13807 6.23856L8 9.10049L10.8619 6.23856C11.1223 5.97821 11.5444 5.97821 11.8047 6.23856C12.0651 6.49891 12.0651 6.92102 11.8047 7.18137L8.4714 10.5147Z" fill="#567191"/>
          </svg>
        </div>
      </div>
      <div className={styles.transcript_container}>
      {
        transcript?.map((value, index) => {
          return (
            <TranscriptionCell key={index} speaker={value.speaker} text={value.text} timestamp={value.timestamp} />
          )
        })
      }
      </div>
    </div>
  )
}

export default TranscriptionField
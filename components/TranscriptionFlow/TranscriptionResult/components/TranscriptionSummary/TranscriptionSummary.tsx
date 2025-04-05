import Image from "next/image";
import Sparkle from "@/images/sparkle.svg";
import Highlight from "./components/Highlight";
import styles from "./TranscriptionSummary.module.scss";
import { JSX } from "react";

const parseText = (text: string, keywords: { [key: string]: { surrounding_text: string; definition: string } }) => {
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;

  Object.entries(keywords).forEach(([keyword, { surrounding_text, definition }]) => {
    const regex = new RegExp(surrounding_text, "g");
    let match;

    while ((match = regex.exec(text)) !== null) {
      // const [fullMatch] = match;

      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      parts.push(
        <Highlight key={`${keyword}-${match.index}`} keyword={keyword} description={definition}>
        </Highlight>
      );

      lastIndex = regex.lastIndex;
    }
  });

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};
const TranscriptionSummary = () => {
  const data = {
    summary: {
      text: "This video shares three disturbing mountain incidents, focusing on two Austrian climbers who died with unknown causes after missing (possibly rockfall or error). It then transitions to a story about Mitsutaka, a man who miraculously survived extreme hypothermia (hibernation like state) after falling and being stranded, requiring a search and rescue. The video concludes with the tragic story of the Krippenstein disaster, where a group of schoolchildren and teachers froze to death due to a teacher's overconfidence and poor weather conditions after multiple warnings ignored.",
      keywords: {
        "mountain incidents": {
          surrounding_text: "disturbing mountain incidents",
          definition: "Overview of disturbing incidents in mountain settings",
        },
        "Julian Alps climbers": {
          surrounding_text: "two Austrian climbers",
          definition: "Experienced climbers who perished in the Julian Alps.",
        },
        "Mitsutaka": {
          surrounding_text: "Mitsutaka",
          definition: "Man who survived extreme hypothermia for 24 days.",
        },
        "survived hypothermia": {
          surrounding_text: "miraculously survived extreme hypothermia",
          definition: "Medical anomaly where a person survives extreme hypothermia, possibly through hibernation.",
        },
        "Krippenstein disaster": {
          surrounding_text: "Krippenstein disaster",
          definition: "Tragic event where schoolchildren and teachers died on a mountain hike due to weather and poor decisions.",
        },
        "froze to death": {
          surrounding_text: "froze to death",
          definition: "The tragic death of the students",
        },
      },
      final_thought: "Next big thing is combining Survival stories with disastrous hikes.",
    },
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <Image src={Sparkle} width={16} alt="AI" />
        <p className={styles.title}>Summary</p>
        <div className={styles.ai}>
          <p>AI</p>
        </div>
      </div>
      <div>{parseText(data.summary.text, data.summary.keywords)}</div>
    </div>
  );
};

export default TranscriptionSummary;
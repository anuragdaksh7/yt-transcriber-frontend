import Sparkle from "@/images/sparkle.svg";
import Image from "next/image";
import styles from "./TranscriptionSummary.module.scss";
import Highlight from "./components/Highlight"; // Ensure Highlight is imported correctly

type Props = {};

type Keywords = {
  [key: string]: string;
};

const TranscriptionSummary = (props: Props) => {
  const data = {
    text: "This video explores how to build a profitable SaaS product using API arbitrage. The key is to leverage existing APIs like building blocks, similar to a <highlight keyword='Lego Philosophy'>Lego Philosophy</highlight>, to create unique solutions. Instead of reinventing the wheel, focus on <highlight keyword='API Arbitrage'>API Arbitrage</highlight> by recognizing gaps between API capabilities and customer needs. Price your product based on <highlight keyword='Asymmetrical Pricing'>Asymmetrical Pricing</highlight>, charging for outcomes rather than API calls. Be mindful of <highlight keyword='API Traps'>API Traps</highlight> such as cost and vendor lock-in. To stand out, <highlight keyword='Own the Glue'>Own the Glue</highlight> by creating proprietary workflows around these APIs. Follow the <highlight keyword='New SaaS Playbook'>New SaaS Playbook</highlight> by solving simple problems with existing APIs and scaling efficiently.",
    keywords: {
      "Lego Philosophy": "Treat APIs as building blocks for your SaaS product.",
      "API Arbitrage": "Recognize gaps between API capabilities and customer needs.",
      "Asymmetrical Pricing": "Charge customers based on outcomes, not API calls.",
      "API Traps": "Be mindful of cost and vendor lock-in.",
      "Own the Glue": "Create proprietary workflows around APIs to stand out.",
      "New SaaS Playbook": "Solve simple problems with existing APIs and scale efficiently.",
    },
  };

  const parseText = (text: string, keywords: Keywords) => {
    const regex = /<highlight keyword='(.*?)'>(.*?)<\/highlight>/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, keyword, displayText] = match;

      // Add the text before the match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Add the Highlight component for the matched keyword
      if (keywords[keyword]) {
        parts.push(
          <Highlight
            key={`${keyword}-${match.index}`}
            keyword={keyword}
            description={keywords[keyword]}
          >
            {displayText}
          </Highlight>
        );
      }

      lastIndex = regex.lastIndex;
    }

    // Add the remaining text after the last match
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
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
      <div>{parseText(data.text, data.keywords)}</div>
    </div>
  );
};

export default TranscriptionSummary;
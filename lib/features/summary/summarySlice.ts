import { RootState } from "@/lib/store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SummaryState {
  summary: {
    text: string;
    final_thought: string;
    keywords: {
      [key: string]: {
        surrounding_text: string;
        definition: string
      }
    }
  },
  detailedSummary: string,
  sentimentScore: {
    sentimentScore: {
      positive: number;
      negative: number;
      neutral: number;
    },
    overallSentiment: string
  },
  hashtags: string[],
  transcription: {
    text: string;
    duration: number;
    offset: number;
    lang: string
  }[],
  results?: {
    id: string;
    videoId: string;
    imageGenerationPrompt: string;
    detailedAnalysis: string;
    summary: string;
    finalThought: string;
    Hashtags: {
      id: string;
      yt_id: string;
      hashtag: string;
    }[],
    Sentiment: {
      id: string;
      yt_id: string;
      overallSentiment: string;
      positive: number;
      negative: number;
      neutral: number;
    },
    Keywords: {
      id: string;
      yt_id: string;
      key: string;
      definition: string;
      surrounding_text: string;
    }[],
  }
}

const initialState: SummaryState = {
  summary: {
    text: "",
    final_thought: "",
    keywords: {}
  },
  detailedSummary: "",
  sentimentScore: {
    sentimentScore: {
      positive: 0,
      negative: 0,
      neutral: 0
    },
    overallSentiment: ""
  },
  hashtags: [],
  transcription: [],
  results: undefined,
}

export const summarySlice = createSlice({
  name: "summary_slice",
  initialState,
  reducers: {
    setSummary: (state, action: PayloadAction<SummaryState>) => {
      state.summary = action.payload.summary;
      state.detailedSummary = action.payload.detailedSummary;
      state.sentimentScore = action.payload.sentimentScore;
      state.hashtags = action.payload.hashtags;
      state.transcription = action.payload.transcription;
      state.results = action.payload.results;
    },
  },
})

export const { setSummary } = summarySlice.actions

export const selectSummary = (state: RootState) => state.summary_slice

export default summarySlice.reducer